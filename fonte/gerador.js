// Gerador de fases para "Quem Foi?": cria mapa, solução e pistas, e garante solução única
// com um resolvedor por domínios (MRV + checagem adiante).
let seed = 12345;
function rnd(){ seed = (seed*1103515245+12345) & 0x7fffffff; return seed/0x7fffffff; }
const ri = n => Math.floor(rnd()*n);
const shuffle = a => { for(let i=a.length-1;i>0;i--){const j=ri(i+1);[a[i],a[j]]=[a[j],a[i]];} return a; };
const BLOCK = ['planta','estante','piano','mesa'];
const isBlock = o => BLOCK.includes(o);
const DIRS=[[1,0],[-1,0],[0,1],[0,-1]];

function makeMap(n, k){
  const minSize = Math.max(2, Math.floor(n*n/k/3));
  for(;;){
    const room = Array.from({length:n},()=>Array(n).fill(-1));
    const cells=[]; for(let r=0;r<n;r++)for(let c=0;c<n;c++)cells.push([r,c]);
    shuffle(cells);
    const fr=[];
    for(let i=0;i<k;i++){const [r,c]=cells[i];room[r][c]=i;fr.push([r,c]);}
    let left=n*n-k, guard=0;
    while(left>0 && guard++<400000){
      const [r,c]=fr[ri(fr.length)]; const id=room[r][c];
      const d=DIRS[ri(4)]; const r2=r+d[0],c2=c+d[1];
      if(r2<0||c2<0||r2>=n||c2>=n||room[r2][c2]!==-1)continue;
      room[r2][c2]=id; fr.push([r2,c2]); left--;
    }
    if(left>0) continue;
    const sizes=Array(k).fill(0); room.flat().forEach(x=>sizes[x]++);
    if(sizes.some(s=>s<minSize)) continue;
    return room;
  }
}
function truth(L,cl,P){
  const {room,obj,n}=L; const R=p=>room[P[p][0]][P[p][1]];
  const count=r=>P.filter(x=>x&&room[x[0]][x[1]]===r).length;
  switch(cl.t){
    case 'in': return R(cl.p)===cl.r;
    case 'notin': return R(cl.p)!==cl.r;
    case 'chair': return obj[P[cl.p][0]][P[cl.p][1]]==='cadeira';
    case 'chairin': return obj[P[cl.p][0]][P[cl.p][1]]==='cadeira' && R(cl.p)===cl.r;
    case 'adj': return DIRS.some(([a,b])=>{const r=P[cl.p][0]+a,c=P[cl.p][1]+b;return r>=0&&c>=0&&r<n&&c<n&&obj[r][c]===cl.o&&room[r][c]===room[P[cl.p][0]][P[cl.p][1]];});
    case 'edge': {const [r,c]=P[cl.p];return r===0||c===0||r===n-1||c===n-1;}
    case 'same': return R(cl.p)===R(cl.q);
    case 'diff': return R(cl.p)!==R(cl.q);
    case 'west': return P[cl.p][1]<P[cl.q][1];
    case 'north': return P[cl.p][0]<P[cl.q][0];
    case 'alone': return count(R(cl.p))===1;
    case 'empty': return count(cl.r)===0;
  }
}
const UNARY = new Set(['in','notin','chair','chairin','adj','edge']);
function countSolutions(L,clues,limit=2,budget=3000000){
  let nodes=0;
  const {n,room,obj}=L, N=n*n;
  const rc = i => [Math.floor(i/n), i%n];
  const emptyRooms = new Set(clues.filter(c=>c.t==='empty').map(c=>c.r));
  const dom = [];
  for(let p=0;p<n;p++){
    const un = clues.filter(c=>UNARY.has(c.t)&&c.p===p);
    const d=[];
    for(let i=0;i<N;i++){ const [r,c]=rc(i);
      if(isBlock(obj[r][c]) || emptyRooms.has(room[r][c])) continue;
      const P=[]; P[p]=[r,c];
      if(un.every(cl=>truth(L,cl,P))) d.push(i); }
    dom.push(d);
  }
  const bins = clues.filter(c=>c.q!==undefined);
  const alone = clues.filter(c=>c.t==='alone').map(c=>c.p);
  const pos = Array(n).fill(-1), P = Array(n);
  const ur = Array(n).fill(false), uc = Array(n).fill(false);
  let cnt=0;
  const roomOf = p => room[P[p][0]][P[p][1]];
  function partialOk(){
    // vítima: no máximo 1 outra pessoa no cômodo dela; "sozinho": ninguém junto
    if(pos[0]>=0){ let k=0; for(let q=1;q<n;q++) if(pos[q]>=0 && roomOf(q)===roomOf(0)) k++; if(k>1) return false; }
    for(const a of alone) if(pos[a]>=0) for(let q=0;q<n;q++) if(q!==a && pos[q]>=0 && roomOf(q)===roomOf(a)) return false;
    return true;
  }
  function feasible(p){
    const out=[];
    for(const i of dom[p]){ const [r,c]=rc(i); if(ur[r]||uc[c]) continue;
      P[p]=[r,c]; let ok=true;
      for(const cl of bins){ if(cl.p!==p && cl.q!==p) continue; const o=cl.p===p?cl.q:cl.p; if(pos[o]<0) continue; if(!truth(L,cl,P)){ok=false;break;} }
      P[p]=undefined; if(ok) out.push(i); }
    return out;
  }
  function rec(depth){
    if(cnt>=limit) return;
    if(++nodes>budget){ cnt=limit; return; } // orçamento estourado: tratado como 'não único' (conservador)
    if(depth===n){
      let k=0; for(let q=1;q<n;q++) if(roomOf(q)===roomOf(0)) k++;
      if(k!==1) return;
      cnt++; return;
    }
    let best=-1, bf=null;
    for(let p=0;p<n;p++){ if(pos[p]>=0) continue; const f=feasible(p); if(!f.length) return; if(!bf||f.length<bf.length){best=p;bf=f;} }
    for(const i of bf){ const [r,c]=rc(i);
      pos[best]=i; P[best]=[r,c]; ur[r]=uc[c]=true;
      if(partialOk()) rec(depth+1);
      pos[best]=-1; P[best]=undefined; ur[r]=uc[c]=false;
      if(cnt>=limit) return; }
  }
  rec(0); return {cnt};
}
function candidates(L){
  const {n,room,obj,pos,k}=L; const C=[];
  const R=p=>room[pos[p][0]][pos[p][1]];
  for(let p=0;p<n;p++){
    C.push({t:'in',p,r:R(p),w:'direct'});
    for(let r=0;r<k;r++) if(r!==R(p)) C.push({t:'notin',p,r,w:'neg'});
    if(obj[pos[p][0]][pos[p][1]]==='cadeira'){ C.push({t:'chair',p,w:'obj'}); C.push({t:'chairin',p,r:R(p),w:'obj'}); }
    for(const o of [...BLOCK,'cadeira']) if(truth(L,{t:'adj',p,o},pos)) C.push({t:'adj',p,o,w:'obj'});
    if(truth(L,{t:'edge',p},pos)) C.push({t:'edge',p,w:'weak'});
    if(p>0 && pos.filter((_,q)=>R(q)===R(p)).length===1) C.push({t:'alone',p,w:'glob'});
    for(let q=0;q<n;q++){ if(q===p) continue;
      if(q>p){ if(R(p)===R(q)) C.push({t:'same',p,q,w:'rel'}); else C.push({t:'diff',p,q,w:'weak'}); }
      if(pos[p][1]<pos[q][1]) C.push({t:'west',p,q,w:'rel'});
      if(pos[p][0]<pos[q][0]) C.push({t:'north',p,q,w:'rel'});
    }
  }
  for(let r=0;r<k;r++) if(!pos.some((_,p)=>R(p)===r)) C.push({t:'empty',r,w:'glob'});
  return C;
}
function pickClues(L,cfg){
  const C=candidates(L), W=cfg.weights;
  let keyed=C.map(c=>({c,key:Math.pow(rnd(),1/(W[c.w]||0.01))})).sort((a,b)=>b.key-a.key).map(x=>x.c);
  let din=0; keyed=keyed.filter(c=>c.t!=='in' || din++<cfg.maxDirect);
  const uniq = cl => countSolutions(L,cl).cnt===1;
  // primeiro: uma pista "de objeto" por pessoa quando existir (pistas que se encadeiam pelo mapa)
  const chosen=[];
  for(let p=0;p<L.n;p++){ const o=keyed.find(c=>c.p===p && c.w==='obj'); if(o) chosen.push(o); }
  const rest=keyed.filter(c=>!chosen.includes(c));
  const step=1;
  while(!uniq(chosen)){ if(!rest.length) return null; chosen.push(...rest.splice(0,step)); }
  // enxugar: tenta remover pistas redundantes (em mapas grandes, só parte delas, por tempo)
  const tries=shuffle([...chosen]);
  for(const c of tries){
    const r=chosen.filter(x=>x!==c);
    if(uniq(r)) chosen.splice(chosen.indexOf(c),1);
  }
  if(chosen.length>cfg.maxClues) return null;
  return chosen.map(({w,...c})=>c);
}
function build(cfg){
  const {n,k,nb,nch}=cfg;
  for(let attempt=0;attempt<500;attempt++){
    const room=makeMap(n,k);
    const obj=Array.from({length:n},()=>Array(n).fill(''));
    const cells=[];for(let r=0;r<n;r++)for(let c=0;c<n;c++)cells.push([r,c]);
    shuffle(cells);
    // móveis raros: tipos com 1 a poucos exemplares
    const types=shuffle(BLOCK.slice()); let i=0;
    for(let b=0;b<nb;b++){const [r,c]=cells[i++]; obj[r][c]=types[b<types.length?b:ri(types.length)];}
    for(let b=0;b<nch;b++){const [r,c]=cells[i++];obj[r][c]='cadeira';}
    const perm=shuffle([...Array(n).keys()]);
    if(perm.some((c,r)=>isBlock(obj[r][c]))) continue;
    const pos=shuffle(perm.map((c,r)=>[r,c]));
    const rm=p=>room[pos[p][0]][pos[p][1]];
    const inV=pos.map((_,p)=>p).filter(p=>rm(p)===rm(0));
    if(inV.length!==2) continue;
    const L={n,room,obj,pos,culprit:inV[1],k};
    const clues=pickClues(L,cfg);
    if(!clues) continue;
    L.clues=clues; return L;
  }
  throw 'falhou';
}
module.exports={build,countSolutions,truth,candidates,setSeed:s=>{seed=s},rnd,shuffle,BLOCK};
