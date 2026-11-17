// Só monta ../index.html a partir de niveis.json (sem gerar tabuleiros). Uso: node montar.js [saida.html]
const fs=require("fs"), T=require("./temporadas.js");
const out=JSON.parse(fs.readFileSync(__dirname+"/niveis.json","utf8"));
const SEASONS=T.map(t=>({t:t.t, sub:t.sub, em:t.em, cor:t.cor}));
const dest=process.argv[2]||__dirname+"/../index.html";
fs.writeFileSync(dest, fs.readFileSync(__dirname+"/modelo.html","utf8").replace("__NIVEIS__", JSON.stringify(out)).replace("__TEMPORADAS__", JSON.stringify(SEASONS)).replace("__AVATAR__", ()=>fs.readFileSync(__dirname+"/avatar.js","utf8")).replace("__CENAS__", ()=>fs.readFileSync(__dirname+"/cenas.js","utf8")));
console.log("gerado:", dest);
