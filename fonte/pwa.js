// Monta a versão instalável (PWA) em ../pwa/: index.html + manifest + service worker + ícones.
const fs=require("fs"), path=require("path");
const OUT=path.join(__dirname,"..","pwa");
fs.mkdirSync(OUT,{recursive:true});
let html=fs.readFileSync(path.join(__dirname,"..","index.html"),"utf8");
const head=`<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#fbf8f3">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Quem Foi?">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="apple-touch-icon" href="icon-192.png">
<link rel="icon" href="icon-192.png">`;
html=html.replace("</title>","</title>\n"+head);
html=html.replace("</body>",`<script>if("serviceWorker" in navigator){addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));}</script>\n</body>`);
fs.writeFileSync(path.join(OUT,"index.html"),html);
fs.writeFileSync(path.join(OUT,"manifest.webmanifest"),JSON.stringify({
  name:"Quem Foi? Mistérios de lógica", short_name:"Quem Foi?", start_url:"./", scope:"./", display:"standalone",
  orientation:"portrait", background_color:"#fbf8f3", theme_color:"#fbf8f3", lang:"pt-BR",
  icons:[{src:"icon-192.png",sizes:"192x192",type:"image/png"},{src:"icon-512.png",sizes:"512x512",type:"image/png"},{src:"icon-512.png",sizes:"512x512",type:"image/png",purpose:"maskable"}]
},null,2));
const ver=Date.now().toString(36);
fs.writeFileSync(path.join(OUT,"sw.js"),`// Service worker: guarda o jogo para funcionar offline.
const CACHE="quem-foi-${ver}";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(r=>{
    // guarda também as fontes do Google e outros arquivos que aparecerem
    if(r.ok&&(r.type==="basic"||r.type==="cors")){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));}
    return r;
  }).catch(()=>caches.match("./index.html"))));
});
`);
console.log("PWA montado em",OUT);
