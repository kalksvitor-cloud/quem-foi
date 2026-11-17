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
  const FURN = (() => {
  const O = "#3a2618";                 // cor do contorno
  const S = `stroke="${O}" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"`;
  const shadow = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#000" opacity=".16"/>`;

  const planta = `<svg viewBox="0 0 40 40">${shadow(20,35.5,9,2.2)}
    <g ${S}>
      <path d="M20 23 C14 20 8 21 6 16 C11 14 17 16 20 23Z" fill="#4f9d3a"/>
      <path d="M20 23 C26 20 32 21 34 16 C29 14 23 16 20 23Z" fill="#4f9d3a"/>
      <path d="M20 23 C15 17 12 11 14 5 C19 8 21 15 20 23Z" fill="#6cbf4a"/>
      <path d="M20 23 C25 17 28 11 26 5 C21 8 19 15 20 23Z" fill="#5aae40"/>
      <path d="M20 23 C18 16 19 9 20 4 C22 9 22 16 20 23Z" fill="#7fd05a"/>
    </g>
    <g stroke="#2f6b22" stroke-width=".7" fill="none" opacity=".8" stroke-linecap="round">
      <path d="M20 22 L9 16.5"/><path d="M20 22 L31 16.5"/><path d="M20 22 L15 7"/><path d="M20 22 L25 7"/>
    </g>
    <path d="M12.5 24 H27.5 L25.5 35 H14.5Z" fill="#c8693b" ${S}/>
    <rect x="11" y="22" width="18" height="4.2" rx="1.4" fill="#e0844f" ${S}/>
    <path d="M15.5 27.5 L16.4 33.5" stroke="#fff" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
  </svg>`;

  const books = [["#d9534f",0,1],["#3f7fd1",3,0],["#e8b23a",6,2],["#4aa36b",9,0],["#8a63c9",12,1],["#e2725b",15,0],["#2f9e9a",18,2]];
  const row = (y,h,shift) => books.map(([c,x,d],k)=>{ const col = books[(k+shift)%books.length][0]; const hh=h-((d+shift)%3);
    return `<rect x="${8.5+x}" y="${y+h-hh}" width="2.6" height="${hh}" rx=".4" fill="${col}" stroke="${O}" stroke-width=".6"/>`; }).join("");
  const estante = `<svg viewBox="0 0 40 40">${shadow(20,36,15,2)}
    <rect x="5.5" y="3.5" width="29" height="31" rx="1.8" fill="#9a643a" ${S}/>
    <rect x="8" y="6" width="24" height="7.5" fill="#5f3b22"/>
    <rect x="8" y="15.5" width="24" height="7.5" fill="#5f3b22"/>
    <rect x="8" y="25" width="24" height="7" fill="#5f3b22"/>
    ${row(6.5,7,0)}${row(16,7,3)}
    <rect x="9" y="28.4" width="5" height="3.6" rx=".5" fill="#e8b23a" stroke="${O}" stroke-width=".6"/>
    <rect x="10" y="26.2" width="4" height="2.2" rx=".5" fill="#d9534f" stroke="${O}" stroke-width=".6"/>
    <circle cx="26" cy="29.5" r="2.4" fill="#f3efe6" stroke="${O}" stroke-width=".6"/>
    <rect x="5.5" y="3.5" width="29" height="31" rx="1.8" fill="none" ${S}/>
    <path d="M7 4.6 H33" stroke="#fff" stroke-opacity=".3" stroke-width="1"/>
  </svg>`;

  const keys = [...Array(10)].map((_,k)=>`<rect x="${8.5+k*2.3}" y="29" width="2.3" height="5" fill="#fff" stroke="${O}" stroke-width=".45"/>`).join("")
    + [0,1,3,4,5,7,8].map(k=>`<rect x="${10.1+k*2.3}" y="29" width="1.3" height="3" fill="#222"/>`).join("");
  const piano = `<svg viewBox="0 0 40 40">${shadow(20,36.5,15,2)}
    <path d="M7 29 V12 C7 6 12 3.5 18 3.5 C25 3.5 27 8 29 11 C31 14 33 15 33 19 V29Z" fill="#26262e" ${S}/>
    <path d="M10 27 V13 C10 8.5 13.5 6.5 18 6.5 C23 6.5 24.5 9.5 26.5 12.5 C28 15 30 16 30 19.5 V27Z" fill="#3a3a46"/>
    <path d="M12 12 C13 9 15.5 8.2 18.5 8.4" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <rect x="7" y="27.5" width="26" height="2" fill="#1b1b22" ${S}/>
    ${keys}
    <rect x="8.5" y="29" width="23" height="5" fill="none" stroke="${O}" stroke-width="1"/>
  </svg>`;

  const mesa = `<svg viewBox="0 0 40 40">${shadow(20,35.5,14,2)}
    <rect x="9" y="20" width="3.4" height="14" rx="1" fill="#7a4a26" ${S}/>
    <rect x="27.6" y="20" width="3.4" height="14" rx="1" fill="#7a4a26" ${S}/>
    <rect x="5" y="18" width="30" height="5" rx="1.2" fill="#8f5a2e" ${S}/>
    <rect x="5" y="7" width="30" height="13" rx="2" fill="#c8874a" ${S}/>
    <path d="M7 11.4 H33 M7 15.6 H33" stroke="#9b6233" stroke-width=".8"/>
    <path d="M8 9 H24" stroke="#fff" stroke-opacity=".4" stroke-width="1.1" stroke-linecap="round"/>
  </svg>`;

  const cadeira = `<svg viewBox="0 0 40 40">${shadow(20,35.5,10,1.8)}
    <rect x="11" y="24" width="2.6" height="10.5" rx=".8" fill="#7a4a26" ${S}/>
    <rect x="26.4" y="24" width="2.6" height="10.5" rx=".8" fill="#7a4a26" ${S}/>
    <rect x="11" y="5" width="2.8" height="20" rx=".8" fill="#9a5f30" ${S}/>
    <rect x="26.2" y="5" width="2.8" height="20" rx=".8" fill="#9a5f30" ${S}/>
    <rect x="10" y="4" width="20" height="5" rx="1.6" fill="#b8763d" ${S}/>
    <path d="M17 9 V19 M20 9 V19 M23 9 V19" stroke="${O}" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M17 9 V19 M20 9 V19 M23 9 V19" stroke="#b8763d" stroke-width=".6" stroke-linecap="round"/>
    <rect x="9" y="19.5" width="22" height="5.5" rx="1.6" fill="#c8874a" ${S}/>
    <path d="M11.5 21.2 H25" stroke="#fff" stroke-opacity=".4" stroke-width="1" stroke-linecap="round"/>
    <path d="M12 5.8 H24" stroke="#fff" stroke-opacity=".35" stroke-width="1" stroke-linecap="round"/>
  </svg>`;

  const clean = s => s.replace(/\s*\n\s*/g, "");
  return { planta: clean(planta), estante: clean(estante), piano: clean(piano), mesa: clean(mesa), cadeira: clean(cadeira) };
})();

  return { T, R, rugSVG, FURN };
})();
