// Pisos, tapetes e móveis desenhados para os cômodos.
const SCENE = (() => {
  const T = {
    wood:   {bg:"#ecd0a6", img:"repeating-linear-gradient(0deg, rgba(120,72,30,.13) 0 1.5px, transparent 1.5px 33.3%), linear-gradient(90deg, transparent 49%, rgba(120,72,30,.10) 49% 51%, transparent 51%)", rug:"rug"},
    parquet:{bg:"#e6c08c", img:"conic-gradient(rgba(255,255,255,.18) 25%, rgba(120,72,30,.10) 0 50%, rgba(255,255,255,.18) 0 75%, rgba(120,72,30,.10) 0)", size:"50% 50%", rug:"rug"},
    dark:   {bg:"#b98762", img:"repeating-linear-gradient(90deg, rgba(60,30,10,.18) 0 1.5px, transparent 1.5px 25%)", rug:"rug"},
    tile:   {bg:"#f6f4ee", img:"conic-gradient(#f6f4ee 25%, #c9d3df 0 50%, #f6f4ee 0 75%, #c9d3df 0)", size:"50% 50%"},
    tileB:  {bg:"#e3f1f6", img:"linear-gradient(rgba(70,120,150,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(70,120,150,.18) 1px, transparent 1px)", size:"33.33% 33.33%"},
    spa:    {bg:"#d7efe6", img:"linear-gradient(rgba(40,120,100,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(40,120,100,.15) 1px, transparent 1px)", size:"50% 50%", rug:"mat"},
    stone:  {bg:"#c9c1b4", img:"radial-gradient(circle at 30% 30%, rgba(255,255,255,.25) 0 18%, transparent 19%), radial-gradient(circle at 75% 70%, rgba(0,0,0,.08) 0 20%, transparent 21%), linear-gradient(rgba(80,70,60,.18) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(80,70,60,.18) 1.5px, transparent 1.5px)", size:"50% 50%"},
    stoneL: {bg:"#e2ddd2", img:"linear-gradient(rgba(80,70,60,.14) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(80,70,60,.14) 1.5px, transparent 1.5px)", size:"50% 50%", rug:"runner"},
    concrete:{bg:"#d3d6d9", img:"radial-gradient(rgba(0,0,0,.07) 1px, transparent 1.5px)", size:"20% 20%"},
    sand:   {bg:"#f0dcaa", img:"radial-gradient(rgba(150,110,40,.18) 1px, transparent 1.5px)", size:"16% 16%", rug:"rug"},
    grass:  {bg:"#b5dd84", img:"radial-gradient(rgba(60,120,30,.25) 1.2px, transparent 1.8px), radial-gradient(rgba(255,255,255,.25) 1px, transparent 1.5px)", size:"25% 25%, 18% 18%", rug:"path"},
    dirt:   {bg:"#d8b48a", img:"radial-gradient(rgba(100,60,20,.2) 1.3px, transparent 2px)", size:"22% 22%"},
    straw:  {bg:"#f2d785", img:"repeating-linear-gradient(35deg, rgba(160,110,20,.18) 0 1px, transparent 1px 7px), repeating-linear-gradient(-30deg, rgba(160,110,20,.12) 0 1px, transparent 1px 9px)"},
    water:  {bg:"#e6f3f8", img:"linear-gradient(rgba(70,120,150,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(70,120,150,.15) 1px, transparent 1px)", size:"50% 50%", rug:"pool"},
    terrace:{bg:"#efb592", img:"linear-gradient(rgba(150,70,40,.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(150,70,40,.2) 1.5px, transparent 1.5px)", size:"50% 50%", rug:"mat"},
    rubber: {bg:"#c3cbd3", img:"radial-gradient(rgba(0,0,0,.12) 1.2px, transparent 1.8px)", size:"20% 20%", rug:"mat"},
    deck:   {bg:"#dcb98a", img:"repeating-linear-gradient(0deg, rgba(90,55,20,.25) 0 1.5px, transparent 1.5px 25%), radial-gradient(rgba(90,55,20,.35) .8px, transparent 1.2px)", size:"100% 100%, 25% 25%"},
    metal:  {bg:"#c8ced4", img:"repeating-linear-gradient(45deg, rgba(255,255,255,.35) 0 2px, transparent 2px 8px), repeating-linear-gradient(-45deg, rgba(0,0,0,.06) 0 2px, transparent 2px 8px)"},
    carpetR:{bg:"#e9a3a3", img:"radial-gradient(rgba(255,255,255,.25) 1.4px, transparent 2px)", size:"25% 25%"},
    carpetB:{bg:"#b5c7ec", img:"radial-gradient(rgba(255,255,255,.3) 1.4px, transparent 2px)", size:"25% 25%", rug:"bed"},
    carpetP:{bg:"#d2bdea", img:"radial-gradient(rgba(255,255,255,.3) 1.4px, transparent 2px)", size:"25% 25%", rug:"rug"},
    stage:  {bg:"#d9a066", img:"repeating-linear-gradient(90deg, rgba(90,50,20,.2) 0 1.5px, transparent 1.5px 25%)", rug:"spot"},
    backstage:{bg:"#a7a9b4", img:"repeating-linear-gradient(90deg, rgba(0,0,0,.12) 0 1.5px, transparent 1.5px 33%)"},
    marble: {bg:"#f4f1ea", img:"linear-gradient(125deg, transparent 40%, rgba(150,140,130,.18) 41%, transparent 43%), linear-gradient(35deg, transparent 60%, rgba(150,140,130,.14) 61%, transparent 62%)", rug:"rug"},
    sawdust:{bg:"#f3dca6", img:"radial-gradient(rgba(170,110,40,.25) 1px, transparent 1.6px)", size:"14% 14%", rug:"ring"},
    canvas: {bg:"#f6e7d0", img:"repeating-linear-gradient(90deg, rgba(220,90,80,.22) 0 25%, transparent 25% 50%)", size:"100% 100%"}
  };
  const R = {
    "Cozinha":["tile","🍳"],"Biblioteca":["dark","📖"],"Salão":["parquet","🛋️"],"Adega":["stone","🍷"],"Escritório":["dark","🖋️"],"Estufa":["grass","🌿"],"Capela":["stoneL","🕯️"],"Sala de Música":["parquet","🎻"],
    "Locomotiva":["metal","⚙️"],"Vagão-Restaurante":["tile","🍽️"],"Bagageiro":["deck","🧳"],"Vagão-Leito":["carpetB","🛏️"],"Vagão-Bar":["dark","🍸"],"Corredor":["carpetR","🚪"],"Cabine Real":["carpetP","👑"],"Vagão-Correio":["deck","✉️"],
    "Convés":["deck","⚓"],"Ponte de Comando":["deck","🧭"],"Casa de Máquinas":["metal","⚙️"],"Cozinha de Bordo":["tile","🍲"],"Salão de Baile":["parquet","💃"],"Camarote":["carpetB","🛏️"],"Porão":["stone","📦"],"Enfermaria":["tileB","🩺"],
    "Palco":["stage","🎭"],"Coxia":["backstage","🎬"],"Camarim":["carpetP","💄"],"Plateia":["carpetR","🎟️"],"Bilheteria":["marble","🎫"],"Fosso da Orquestra":["dark","🎺"],"Sala de Figurinos":["carpetP","👗"],"Foyer":["marble","🥂"],
    "Recepção":["marble","🛎️"],"Restaurante":["parquet","🍽️"],"Piscina":["water","🏊"],"Suíte Presidencial":["carpetB","🛏️"],"Lavanderia":["tileB","🧺"],"Academia":["rubber","🏋️"],"Terraço":["terrace","🌅"],"Spa":["spa","🧖"],
    "Sala Egípcia":["sand","🏺"],"Galeria":["parquet","🖼️"],"Reserva Técnica":["concrete","📦"],"Café":["tile","☕"],"Laboratório":["tileB","🔬"],"Sala dos Fósseis":["sand","🦴"],"Hall":["marble","🏛️"],"Sala das Joias":["carpetR","💎"],
    "Picadeiro":["sawdust","🎪"],"Trailer":["wood","🚐"],"Jaula":["straw","🦁"],"Arquibancada":["wood","🎟️"],"Lona de Ensaio":["canvas","🤹"],
    "Casarão":["wood","🏡"],"Celeiro":["straw","🌾"],"Curral":["dirt","🐄"],"Pomar":["grass","🍎"],"Moinho":["stone","🌀"],"Alambique":["stone","🥃"]
  };
  const RUGC = ["#c0504d","#3f6fb5","#5b8a3c","#8b5fbf","#c77d1a","#2d8b88"];
  function rugSVG(kind, w, h, k){
    const c = RUGC[k % RUGC.length];
    if (kind==="rug") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><rect x="2" y="2" width="${w*20-4}" height="${h*20-4}" rx="4" fill="${c}" opacity=".22"/><rect x="5" y="5" width="${w*20-10}" height="${h*20-10}" rx="3" fill="none" stroke="${c}" stroke-opacity=".35" stroke-width="1"/></svg>`;
    if (kind==="runner") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><rect x="${w>=h?2:w*10-5}" y="${w>=h?h*10-5:2}" width="${w>=h?w*20-4:10}" height="${w>=h?10:h*20-4}" fill="#a61e4d" opacity=".55"/></svg>`;
    if (kind==="mat") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><rect x="3" y="3" width="${w*20-6}" height="${h*20-6}" rx="4" fill="#fff" opacity=".35"/></svg>`;
    if (kind==="pool") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><rect x="3" y="3" width="${w*20-6}" height="${h*20-6}" rx="5" fill="#6cc6ec" stroke="#fff" stroke-width="2"/><path d="M6 ${h*7} q4 -3 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" stroke="#fff" stroke-opacity=".6" fill="none" transform="scale(1 1)"/></svg>`;
    if (kind==="ring") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><ellipse cx="${w*10}" cy="${h*10}" rx="${w*10-3}" ry="${h*10-3}" fill="none" stroke="#e03131" stroke-width="3" opacity=".7"/></svg>`;
    if (kind==="spot") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><ellipse cx="${w*10}" cy="${h*10}" rx="${w*10-2}" ry="${h*10-2}" fill="#fff6c4" opacity=".55"/></svg>`;
    if (kind==="bed") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><rect x="3" y="3" width="${w*20-6}" height="${h*20-6}" rx="4" fill="#fff" opacity=".4"/></svg>`;
    if (kind==="path") return `<svg viewBox="0 0 ${w*20} ${h*20}" preserveAspectRatio="none"><rect x="${w>=h?2:w*10-4}" y="${w>=h?h*10-4:2}" width="${w>=h?w*20-4:8}" height="${w>=h?8:h*20-4}" rx="4" fill="#e9d6ae" opacity=".9"/></svg>`;
    return "";
  }
  const FURN = {
    planta:`<svg viewBox="0 0 40 40"><ellipse cx="20" cy="33" rx="9" ry="3" fill="#000" opacity=".15"/><path d="M13 24 L27 24 L25 33 L15 33Z" fill="#c8693b"/><rect x="12" y="22" width="16" height="4" rx="1.5" fill="#e07b45"/><g fill="#3f9b4a"><ellipse cx="20" cy="13" rx="4" ry="9"/><ellipse cx="13" cy="16" rx="3.5" ry="8" transform="rotate(-35 13 16)"/><ellipse cx="27" cy="16" rx="3.5" ry="8" transform="rotate(35 27 16)"/></g><g fill="#5cbf5f"><ellipse cx="16" cy="12" rx="2.5" ry="7" transform="rotate(-15 16 12)"/><ellipse cx="24" cy="12" rx="2.5" ry="7" transform="rotate(15 24 12)"/></g></svg>`,
    estante:`<svg viewBox="0 0 40 40"><rect x="5" y="31" width="30" height="5" fill="#000" opacity=".15" rx="2"/><rect x="5" y="4" width="30" height="30" rx="2" fill="#8a5a36"/><rect x="7" y="6" width="26" height="8" fill="#5e3b22"/><rect x="7" y="16" width="26" height="8" fill="#5e3b22"/><rect x="7" y="26" width="26" height="6" fill="#5e3b22"/>${[["#e03131",8],["#1c7ed6",11],["#f59f00",14],["#2f9e44",17],["#7048e8",21],["#e64980",24],["#0ca678",27],["#fab005",30]].map(([c,x],k)=>`<rect x="${x}" y="${k%2?7:8}" width="2.6" height="${k%2?7:6}" fill="${c}"/><rect x="${x+ (k%3)}" y="${k%2?17:18}" width="2.6" height="${k%2?7:6}" fill="${["#1c7ed6","#e03131","#2f9e44","#fab005"][k%4]}"/>`).join("")}</svg>`,
    piano:`<svg viewBox="0 0 40 40"><ellipse cx="20" cy="34" rx="15" ry="3" fill="#000" opacity=".15"/><path d="M6 8 L34 8 L34 20 Q34 34 20 33 Q10 33 8 24 Q6 18 6 8Z" fill="#1d1d22"/><path d="M9 11 L31 11 L31 20 Q31 30 20 30 Q12 30 10.5 23 Q9 18 9 11Z" fill="#34343c"/><rect x="6" y="4" width="28" height="5" fill="#fff" stroke="#1d1d22" stroke-width="1"/>${[...Array(9)].map((_,k)=>`<rect x="${8+k*2.8}" y="4" width="1.4" height="3" fill="#1d1d22"/>`).join("")}<path d="M13 14 Q22 12 28 18" stroke="#fff" stroke-opacity=".25" stroke-width="1.5" fill="none"/></svg>`,
    mesa:`<svg viewBox="0 0 40 40"><ellipse cx="20" cy="34" rx="14" ry="2.6" fill="#000" opacity=".15"/><rect x="9" y="22" width="3" height="11" rx="1" fill="#7a4a24"/><rect x="28" y="22" width="3" height="11" rx="1" fill="#7a4a24"/><rect x="5" y="9" width="30" height="15" rx="3" fill="#a96a35"/><rect x="5" y="9" width="30" height="11" rx="3" fill="#c98243"/><path d="M8 13 H32 M8 16.5 H32" stroke="#a96a35" stroke-width=".8" opacity=".6"/><circle cx="20" cy="14.5" r="3" fill="#fff" opacity=".85"/><circle cx="20" cy="14.5" r="1.6" fill="#ffd43b"/></svg>`,
    cadeira:`<svg viewBox="0 0 40 40"><ellipse cx="20" cy="33" rx="10" ry="2.5" fill="#000" opacity=".12"/><rect x="11" y="8" width="18" height="5" rx="2" fill="#a0602f"/><rect x="11" y="14" width="18" height="16" rx="3" fill="#c98243"/><rect x="13" y="16" width="14" height="12" rx="2" fill="#e05d5d"/><rect x="12" y="13" width="2.5" height="5" fill="#a0602f"/><rect x="25.5" y="13" width="2.5" height="5" fill="#a0602f"/></svg>`
  };
  return { T, R, rugSVG, FURN };
})();
