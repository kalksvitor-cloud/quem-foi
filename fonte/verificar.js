// Verificador independente (não usa o gerador): busca linha a linha e conta TODAS as soluções (até 2).
const L = require("./niveis.json");
const BL=new Set(["planta","estante","piano","mesa"]);
let allOk=true;
function check(lv){
  const n=lv.n, rm=(r,c)=>lv.room[r][c];
  const ok1=(c,pr,pc)=>{ switch(c.t){
    case "in": return rm(pr,pc)===c.r; case "notin": return rm(pr,pc)!==c.r;
    case "chair": return lv.obj[pr][pc]==="cadeira"; case "chairin": return lv.obj[pr][pc]==="cadeira"&&rm(pr,pc)===c.r;
    case "adj": return [[0,1],[1,0],[0,-1],[-1,0]].some(([a,b])=>lv.obj[pr+a]?.[pc+b]===c.o);
    case "edge": return pr===0||pc===0||pr===n-1||pc===n-1; } return true; };
  const empt=new Set(lv.clues.filter(c=>c.t==="empty").map(c=>c.r));
  // domínio unário de cada pessoa
  const D=[...Array(n)].map((_,p)=>{const s=[];for(let r=0;r<n;r++)for(let c=0;c<n;c++){ if(BL.has(lv.obj[r][c])||empt.has(rm(r,c))) continue;
    if(lv.clues.every(cl=>cl.p!==p||cl.q!==undefined||cl.t==="alone"||ok1(cl,r,c))) s.push([r,c]);} return s;});
  const bin=lv.clues.filter(c=>c.q!==undefined), alone=lv.clues.filter(c=>c.t==="alone");
  const pos=Array(n).fill(null), usedR=Array(n).fill(false), usedC=Array(n).fill(false);
  let count=0, match=false;
  const order=[...Array(n).keys()].sort((a,b)=>D[a].length-D[b].length);
  function binOk(p){ for(const c of bin){ if(c.p!==p&&c.q!==p) continue; const a=pos[c.p], b=pos[c.q]; if(!a||!b) continue;
      const t = c.t==="same"? rm(...a)===rm(...b) : c.t==="diff"? rm(...a)!==rm(...b) : c.t==="west"? a[1]<b[1] : a[0]<b[0];
      if(!t) return false; } return true; }
  function roomsOk(){ // vítima com no máximo 1 acompanhante; "sozinho" sem ninguém junto
    if(pos[0]){ const vr=rm(...pos[0]); if(pos.filter((x,q)=>q>0&&x&&rm(...x)===vr).length>1) return false; }
    for(const c of alone){ const a=pos[c.p]; if(!a) continue; if(pos.some((x,q)=>q!==c.p&&x&&rm(...x)===rm(...a))) return false; }
    return true; }
  function alive(k){ for(let j=k;j<n;j++){ const p=order[j]; if(!D[p].some(([r,c])=>!usedR[r]&&!usedC[c])) return false; } return true; }
  function rowDFS(k){
    if(count>1) return;
    if(k===n){
      const occ={}; pos.forEach(([r,c])=>occ[rm(r,c)]=(occ[rm(r,c)]||0)+1);
      if(occ[rm(...pos[0])]!==2) return;
      for(const c of alone) if(occ[rm(...pos[c.p])]!==1) return;
      count++; if(pos.every((x,p)=>x[0]===lv.sol[p][0]&&x[1]===lv.sol[p][1])) match=true; return;
    }
    const p=order[k];
    for(const [r,c] of D[p]){ if(usedR[r]||usedC[c]) continue;
      pos[p]=[r,c]; usedR[r]=usedC[c]=true;
      if(binOk(p) && roomsOk() && alive(k+1)) rowDFS(k+1);
      pos[p]=null; usedR[r]=usedC[c]=false; }
  }
  rowDFS(0);
  const vr=rm(...lv.sol[0]);
  const culpritOk = !lv.people[lv.culprit].victim && rm(...lv.sol[lv.culprit])===vr && lv.sol.filter((s,p)=>p>0&&rm(...s)===vr).length===1;
  return {count,match,culpritOk};
}
const ONLY=process.env.ONLY?process.env.ONLY.split(",").map(Number):null;
L.forEach((lv,ix)=>{ if(ONLY&&!ONLY.includes(ix)) return; const t=Date.now(); const {count,match,culpritOk}=check(lv); const good=count===1&&match&&culpritOk; if(!good) allOk=false;
  console.log(`T${lv.temp+1}C${lv.cap+1} ${lv.n}x${lv.n} ${lv.t}: soluções=${count>1?"2+":count} confere=${match} culpado=${culpritOk} ${good?"OK":"FALHA"} (${Date.now()-t}ms)`); });
console.log(allOk?"TODOS OS CASOS OK":"HÁ FALHAS"); process.exit(allOk?0:1);
