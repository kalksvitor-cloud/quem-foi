// Gera niveis.json e ../index.html a partir de temporadas.js + cenarios.js. Uso: node build.js
const G = require("./gerador.js");
const fs = require("fs");
const ONLY = process.env.ONLY ? process.env.ONLY.split(",").map(Number) : null;
fs.mkdirSync(__dirname+"/cache",{recursive:true});
const CEN = require("./cenarios.js");
const MV = require("./moveis.js");
const SIZES = [4,4,5,6,6,7,8,9,10,12];
const DIFFS = ["F","F","F","M","M","M","M","D","D","D"];
const WEIGHTS = {
  F:{direct:1.5,neg:1,obj:7,rel:0.3,pair:0.8,weak:0.4,glob:1},
  M:{direct:0.5,neg:1.2,obj:7,rel:0.4,pair:1,weak:0.6,glob:1.5},
  D:{direct:0.2,neg:1.3,obj:6,rel:0.5,pair:1,weak:0.8,glob:1.5}
};
const cfgFor = (n,d) => ({n, k:Math.min(n,8), nb:Math.max(2,Math.round(n*1.1)), nch:Math.max(2,Math.round(n*0.6)), maxRel: process.env.MAXREL?+process.env.MAXREL:(d==='F'?1:d==='M'?Math.max(2,Math.round(n/4)):Math.round(n/3)),
  maxClues:99, maxDirect: d==="F"?2:1, weights:WEIGHTS[d]});
const T = require("./temporadas.js");
const out = [];
T.forEach((temp, si) => {
  const presos = new Set(), mortos = new Set();
  temp.caps.forEach((c, ci) => {
  const idx = si*10 + ci, n = SIZES[ci], d = DIFFS[ci], cfg = cfgFor(n,d);
  // cache por capítulo (cache/NN.json): apague o arquivo para gerar de novo
  const cf = __dirname+"/cache/"+idx+".json";
  if (fs.existsSync(cf)) { const e=JSON.parse(fs.readFileSync(cf,"utf8")); presos.add(c.w[0]); mortos.add(c.v[0]); out.push(Object.assign(e,{t:c.t,i:c.i,e:c.e,g:c.g})); return; }
  if (ONLY && !ONLY.includes(idx)) { presos.add(c.w[0]); mortos.add(c.v[0]); out.push(null); return; }
  G.setSeed(1000 + idx*7919 + (+process.env.SALT||0));
  const cen = CEN[c.s];
  const rooms = G.shuffle(cen.rooms.slice()).slice(0, cfg.k);
  cfg.kindsFor = (cat, ri) => MV.kindsFor(cat, rooms[ri][0]);
  const t0=Date.now(); let L=null; for(let tr=0;!L&&tr<12;tr++){ try{ L=G.build(cfg); }catch(e){ G.setSeed(1000 + idx*7919 + (+process.env.SALT||0) + 101*(tr+1)); } } if(!L) throw 'falhou '+idx; console.error(`T${si+1}C${ci+1} ${n}x${n} ${L.clues.length} pistas ${Date.now()-t0}ms`);
  // elenco do capítulo: citados na história + gente livre (nem presa, nem morta) do elenco da temporada
  const livres = Object.keys(temp.cast).filter(k => !c.w.includes(k) && !presos.has(k) && !mortos.has(temp.cast[k][0]) && temp.cast[k][0]!==c.v[0]);
  const w = c.w.concat(livres).slice(0, n-1);
  if (w.length !== n-1) throw `T${si+1}C${ci+1}: elenco insuficiente (${w.length}/${n-1})`;
  presos.add(c.w[0]); mortos.add(c.v[0]);
  // pistas extras: cada pessoa é sujeito de pelo menos MIN depoimentos (preferindo móveis do mapa)
  const MIN = d==="D" ? 1 : 2;
  const PREF = {obj:8, rel:0.05, pair:1, neg:1.2, glob:1.5, weak:0.6, direct:0.3};
  const has = (cl,p) => cl.p===p || ((cl.t==="same"||cl.t==="diff") && cl.q===p);
  const sig = cl => JSON.stringify([cl.t,cl.p,cl.q,cl.r,cl.o]);
  const used = new Set(L.clues.map(sig));
  const cand = G.candidates(L);
  for (let p=0; p<L.n; p++) {
    while (L.clues.filter(cl=>has(cl,p)).length < MIN) {
      const opts = cand.filter(cl=>has(cl,p) && !used.has(sig(cl)) && cl.t!=="in");
      if (!opts.length) break;
      let tot = opts.reduce((a,cl)=>a+PREF[cl.w],0), x = G.rnd()*tot, pick = opts[0];
      for (const cl of opts) { x -= PREF[cl.w]; if (x<=0) { pick=cl; break; } }
      used.add(sig(pick)); const {w:_w, ...cl} = pick; L.clues.push(cl);
    }
  }
  G.shuffle(L.clues);
  const rest = w.slice(1), slots = Array(L.n).fill(null); slots[L.culprit] = w[0];
  let o = 0; for (let s=1; s<L.n; s++) if (!slots[s]) slots[s] = rest[o++];
  const people = [{full:c.v[0], g:c.v[1], victim:true}].concat(slots.slice(1).map(n=>({full:temp.cast[n][0], g:temp.cast[n][1], ini:n})));
  // iniciais únicas dentro do capítulo
  const vic = c.v[0].split(" ").pop(); people[0].ini = vic;
  const first = people.map(p=>p.ini[0]);
  people.forEach((p,k)=>{ p.ini = first.filter(x=>x===first[k]).length>1 ? p.ini.slice(0,2) : p.ini[0]; });
  const entry = ({temp:si, cap:ci, d, t:c.t, local:cen.nome, i:c.i, e:c.e, g:c.g, n:L.n, room:L.room, obj:L.obj, sol:L.pos, culprit:L.culprit, clues:L.clues, people, rooms});
  fs.writeFileSync(cf, JSON.stringify(entry)); out.push(entry);
});
});
const SEASONS = T.map(t=>({t:t.t, sub:t.sub, em:t.em, cor:t.cor}));
if (out.some(x=>!x)) { console.error("parcial: cache gravado"); process.exit(0); }
require("fs").writeFileSync(__dirname+"/niveis.json", JSON.stringify(out));
console.log(out.map((l,i)=>`T${l.temp+1}C${l.cap+1} ${l.d} ${l.n}x${l.n} pistas=${l.clues.length} [${l.clues.map(c=>c.t).join(" ")}] ${l.people.map(p=>p.ini).join(",")}`).join("\n"));
// monta o jogo final
fs.writeFileSync(__dirname+"/../index.html", fs.readFileSync(__dirname+"/modelo.html","utf8").replace("__NIVEIS__", JSON.stringify(out)).replace("__TEMPORADAS__", JSON.stringify(SEASONS)).replace("__AVATAR__", ()=>fs.readFileSync(__dirname+"/avatar.js","utf8")).replace("__CENAS__", ()=>fs.readFileSync(__dirname+"/moveis.js","utf8")+"\n"+fs.readFileSync(__dirname+"/cenas.js","utf8")));
console.log("index.html gerado");
