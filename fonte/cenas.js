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
  const RUGC = [["#b8433f","#7e2a28","#f0d9a8"],["#3f6fb5","#274b85","#f3e3bd"],["#4e7f3a","#2f5a22","#f1e2b0"],["#7d55b0","#523380","#f3dfc0"],["#c27420","#8a4f12","#f6e4bf"],["#2d8b88","#1b5f5d","#f3e2bf"]];
  const RO = "#3a2618";
  function rugSVG(kind, w, h, k){
    const W=w*20, H=h*20, [c,d,l] = RUGC[k % RUGC.length];
    const box = b => `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">${b}</svg>`;
    const fringe = (x1,x2,y,dir) => { let f=""; for(let x=x1+1.5;x<x2;x+=2.2) f+=`<path d="M${x} ${y} v${dir*2.6}" stroke="#efe3c8" stroke-width=".9" stroke-linecap="round"/>`; return f; };
    const sh = `opacity=".18"`;
    if (kind==="rug") {
      const x=4,y=5,ww=W-8,hh=H-10, cx=W/2, cy=H/2, rx=Math.min(ww,hh)*.32, ry=rx;
      const horiz = w>=h;
      const fr = horiz ? fringe(y,y+hh,x,-1).replace(/M(\S+) (\S+) v/g,(m,a,b)=>`M${b} ${a} h`) + fringe(y,y+hh,x+ww,1).replace(/M(\S+) (\S+) v/g,(m,a,b)=>`M${b} ${a} h`) : fringe(x,x+ww,y,-1)+fringe(x,x+ww,y+hh,1);
      let dots=""; for(let i=x+5;i<x+ww-3;i+=5) dots+=`<circle cx="${i}" cy="${y+3.3}" r=".8" fill="${l}"/><circle cx="${i}" cy="${y+hh-3.3}" r=".8" fill="${l}"/>`;
      for(let j=y+8;j<y+hh-5;j+=5) dots+=`<circle cx="${x+3.3}" cy="${j}" r=".8" fill="${l}"/><circle cx="${x+ww-3.3}" cy="${j}" r=".8" fill="${l}"/>`;
      return box(`<rect x="${x+1.5}" y="${y+2}" width="${ww}" height="${hh}" rx="2" fill="#000" ${sh}/>${fr}
        <rect x="${x}" y="${y}" width="${ww}" height="${hh}" rx="2" fill="${d}" stroke="${RO}" stroke-width=".9"/>${dots}
        <rect x="${x+6.5}" y="${y+6.5}" width="${ww-13}" height="${hh-13}" rx="1.5" fill="${c}" stroke="${l}" stroke-width="1.2"/>
        <path d="M${cx} ${cy-ry} L${cx+rx*1.25} ${cy} L${cx} ${cy+ry} L${cx-rx*1.25} ${cy}Z" fill="${d}" stroke="${l}" stroke-width="1.1"/>
        <path d="M${cx} ${cy-ry*.55} L${cx+rx*.68} ${cy} L${cx} ${cy+ry*.55} L${cx-rx*.68} ${cy}Z" fill="${l}" opacity=".85"/>
        <circle cx="${cx}" cy="${cy}" r="${Math.max(1.2,rx*.16)}" fill="${c}"/>
        ${[[x+6.5,y+6.5,1,1],[x+ww-6.5,y+6.5,-1,1],[x+6.5,y+hh-6.5,1,-1],[x+ww-6.5,y+hh-6.5,-1,-1]].map(([px,py,sx,sy])=>`<path d="M${px} ${py} l${sx*6} 0 l${-sx*6} ${sy*6}Z" fill="${d}" stroke="${l}" stroke-width=".7"/>`).join("")}`);
    }
    if (kind==="runner") {
      const horiz=w>=h, t=11;
      const x=horiz?3:W/2-t/2, y=horiz?H/2-t/2:3, ww=horiz?W-6:t, hh=horiz?t:H-6;
      let pat=""; const n=Math.floor((horiz?ww:hh)/9);
      for(let i=0;i<n;i++){ const p=(horiz?x:y)+4.5+i*9+((horiz?ww:hh)-n*9)/2; pat+= horiz?`<path d="M${p} ${y+2.5} l3 3 l-3 3 l-3 -3Z" fill="#f0c6a0"/>`:`<path d="M${x+2.5} ${p} l3 -3 l3 3 l-3 3Z" fill="#f0c6a0"/>`; }
      return box(`<rect x="${x+1}" y="${y+1.5}" width="${ww}" height="${hh}" fill="#000" ${sh}/><rect x="${x}" y="${y}" width="${ww}" height="${hh}" fill="#8e1f3f" stroke="${RO}" stroke-width=".9"/><rect x="${x+1.6}" y="${y+1.6}" width="${ww-3.2}" height="${hh-3.2}" fill="none" stroke="#e8b23a" stroke-width=".8"/>${pat}`);
    }
    if (kind==="mat" || kind==="bed") {
      const x=5,y=5,ww=W-10,hh=H-10; let st="";
      const cc = kind==="bed" ? ["#f6f1e7","#bcd3f0"] : ["#f6f1e7","#e9a77f"];
      for(let i=0;i<(w>=h?ww:hh);i+=6) st+= w>=h?`<rect x="${x+i}" y="${y}" width="3" height="${hh}" fill="${cc[1]}" opacity=".7"/>`:`<rect x="${x}" y="${y+i}" width="${ww}" height="3" fill="${cc[1]}" opacity=".7"/>`;
      return box(`<rect x="${x+1}" y="${y+1.5}" width="${ww}" height="${hh}" rx="3" fill="#000" ${sh}/><rect x="${x}" y="${y}" width="${ww}" height="${hh}" rx="3" fill="${cc[0]}"/>${st}<rect x="${x}" y="${y}" width="${ww}" height="${hh}" rx="3" fill="none" stroke="${RO}" stroke-width=".9"/>`);
    }
    if (kind==="pool") {
      const x=3,y=3,ww=W-6,hh=H-6; let wv="";
      for(let j=y+8;j<y+hh-3;j+=9) wv+=`<path d="M${x+4} ${j} q3 -2 6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0" stroke="#fff" stroke-opacity=".55" stroke-width="1" fill="none"/>`;
      return box(`<defs><clipPath id="pc${k}"><rect x="${x+2.5}" y="${y+2.5}" width="${ww-5}" height="${hh-5}" rx="3"/></clipPath></defs><rect x="${x}" y="${y}" width="${ww}" height="${hh}" rx="4" fill="#eef4f6" stroke="${RO}" stroke-width=".9"/><rect x="${x+2.5}" y="${y+2.5}" width="${ww-5}" height="${hh-5}" rx="3" fill="#5ab8e0"/><rect x="${x+2.5}" y="${y+2.5}" width="${ww-5}" height="4" fill="#3d97c2" opacity=".6"/><g clip-path="url(#pc${k})">${wv}</g><path d="M${x+ww-9} ${y+1} v7 M${x+ww-5} ${y+1} v7 M${x+ww-9} ${y+3.5} h4 M${x+ww-9} ${y+6} h4" stroke="#aab4be" stroke-width="1" stroke-linecap="round"/>`);
    }
    if (kind==="ring") return box(`<ellipse cx="${W/2}" cy="${H/2+1}" rx="${W/2-3}" ry="${H/2-3}" fill="none" stroke="#000" stroke-width="5" opacity=".12"/><ellipse cx="${W/2}" cy="${H/2}" rx="${W/2-3}" ry="${H/2-3}" fill="none" stroke="${RO}" stroke-width="5.4"/><ellipse cx="${W/2}" cy="${H/2}" rx="${W/2-3}" ry="${H/2-3}" fill="none" stroke="#d63c3c" stroke-width="3.6" stroke-dasharray="8 6"/><ellipse cx="${W/2}" cy="${H/2}" rx="${W/2-3}" ry="${H/2-3}" fill="none" stroke="#f6f1e7" stroke-width="3.6" stroke-dasharray="6 8" stroke-dashoffset="-8"/>`);
    if (kind==="spot") return box(`<ellipse cx="${W/2}" cy="${H/2}" rx="${W/2-2}" ry="${H/2-2}" fill="#fff6c4" opacity=".45"/><ellipse cx="${W/2}" cy="${H/2}" rx="${W/2-8}" ry="${H/2-8}" fill="#fff6c4" opacity=".45"/>`);
    if (kind==="path") {
      const horiz=w>=h, L=horiz?W:H; let st="";
      for(let i=4,j=0;i<L-2;i+=5,j++){ const off=(j%2?1.6:-1.6); const cx=horiz?i:W/2+off, cy=horiz?H/2+off:i; st+=`<ellipse cx="${cx}" cy="${cy}" rx="2.2" ry="1.7" fill="#d9cdb8" stroke="${RO}" stroke-width=".5"/><ellipse cx="${cx-.6}" cy="${cy-.6}" rx=".9" ry=".55" fill="#fff" opacity=".45"/>`; }
      return box(`<rect x="${horiz?2:W/2-6}" y="${horiz?H/2-6:2}" width="${horiz?W-4:9}" height="${horiz?9:H-4}" rx="6" fill="#e3cfa4" opacity=".75"/>${st}`);
    }
    return "";
  }
  const FURN = (() => {
  const O = "#3a2618";
  const S = `stroke="${O}" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"`;
  const s1 = `stroke="${O}" stroke-width=".8" stroke-linejoin="round" stroke-linecap="round"`;
  const shadow = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#000" opacity=".16"/>`;
  const hl = (d, w=1.1, o=.4) => `<path d="${d}" stroke="#fff" stroke-opacity="${o}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
  const svg = b => `<svg viewBox="0 0 40 40">${b}</svg>`;

  // ---------- PLANTAS ----------
  const pot = (c="#c8693b", r="#e0844f") => `<path d="M12.5 24 H27.5 L25.5 35 H14.5Z" fill="${c}" ${S}/><rect x="11" y="22" width="18" height="4.2" rx="1.4" fill="${r}" ${S}/>${hl("M15.5 27.5 L16.4 33.5",1.3,.35)}`;
  const vaso = svg(`${shadow(20,35.5,9,2.2)}<g ${S}>
      <path d="M20 23 C14 20 8 21 6 16 C11 14 17 16 20 23Z" fill="#4f9d3a"/>
      <path d="M20 23 C26 20 32 21 34 16 C29 14 23 16 20 23Z" fill="#4f9d3a"/>
      <path d="M20 23 C15 17 12 11 14 5 C19 8 21 15 20 23Z" fill="#6cbf4a"/>
      <path d="M20 23 C25 17 28 11 26 5 C21 8 19 15 20 23Z" fill="#5aae40"/>
      <path d="M20 23 C18 16 19 9 20 4 C22 9 22 16 20 23Z" fill="#7fd05a"/></g>
    <g stroke="#2f6b22" stroke-width=".7" fill="none" opacity=".8" stroke-linecap="round"><path d="M20 22 L9 16.5"/><path d="M20 22 L31 16.5"/><path d="M20 22 L15 7"/><path d="M20 22 L25 7"/></g>${pot()}`);

  const flor = (x,y,c) => `<g><circle cx="${x-1.3}" cy="${y}" r="1.4" fill="#fff"/><circle cx="${x+1.3}" cy="${y}" r="1.4" fill="#fff"/><circle cx="${x}" cy="${y-1.3}" r="1.4" fill="#fff"/><circle cx="${x}" cy="${y+1.3}" r="1.4" fill="#fff"/><circle cx="${x}" cy="${y}" r="1" fill="${c}"/></g>`;
  const arbusto = svg(`${shadow(20,34.5,14,2.6)}
    <path d="M7 27 C3 24 4 17 9 16 C9 10 15 7 19 9 C22 5 29 6 31 11 C36 12 37 19 34 22 C36 27 31 32 26 30 C23 33 15 33 13 30 C9 32 5 30 7 27Z" fill="#4c9a3c" ${S}/>
    <path d="M10 18 C11 13 16 11 19 12 M22 9.5 C26 8.5 29 10 30 13" stroke="#8fd16a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M12 26 C15 28 19 28 22 27 M26 24 C29 25 31 23 32 21" stroke="#2f6b22" stroke-width="1" fill="none" stroke-linecap="round" opacity=".7"/>
    ${flor(12,21,"#f2c14e")}${flor(20,16,"#f2c14e")}${flor(28,19,"#f2c14e")}${flor(17,25,"#f2c14e")}${flor(26,26,"#f2c14e")}`);

  const arvore = svg(`${shadow(20,35.5,10,2.3)}
    <path d="M18 34 L18.5 24 L21.5 24 L22 34Z" fill="#8a5a33" ${S}/>
    <path d="M20 4 C26 4 30 8 30 12 C34 14 34 21 30 23 C29 27 24 28 20 26 C16 28 11 27 10 23 C6 21 6 14 10 12 C10 8 14 4 20 4Z" fill="#5aa845" ${S}/>
    <path d="M13 12 C14 8.5 17 7 20 7" stroke="#9ad978" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M14 20 C17 22 23 22 26 20" stroke="#2f6b22" stroke-width="1" fill="none" stroke-linecap="round" opacity=".6"/>
    <circle cx="15" cy="16" r="1.8" fill="#e5483f" ${s1}/><circle cx="25" cy="13" r="1.8" fill="#e5483f" ${s1}/><circle cx="22" cy="20" r="1.8" fill="#e5483f" ${s1}/>`);

  const cacto = svg(`${shadow(20,35.5,9,2.2)}
    <path d="M17 24 V9 C17 5 23 5 23 9 V24Z" fill="#5fae5a" ${S}/>
    <path d="M17 18 H13 C11 18 10.5 16.5 10.5 15 V11 C10.5 9 13.5 9 13.5 11 V15 H17" fill="#5fae5a" ${S}/>
    <path d="M23 15 H27 V9 C27 7 30 7 30 9 V14 C30 16.5 29 18 27 18 H23" fill="#5fae5a" ${S}/>
    <path d="M20 8 V23" stroke="#3f8a3c" stroke-width=".8"/>${hl("M18.5 9 V21",1,.45)}
    <circle cx="20" cy="5.6" r="1.6" fill="#f06595" ${s1}/>
    ${pot("#d9a066","#ecbc80")}`);

  const palmeira = svg(`${shadow(20,35.5,10,2.2)}
    <path d="M19 23 L19.5 12 L21 12 L21.5 23Z" fill="#9a6a3a" ${s1}/>
    <g ${S}>
      <path d="M20 12 C14 8 8 9 4 14 C10 12 15 13 20 12Z" fill="#5aae40"/>
      <path d="M20 12 C26 8 32 9 36 14 C30 12 25 13 20 12Z" fill="#5aae40"/>
      <path d="M20 12 C17 7 12 4 7 5 C12 7 16 9 20 12Z" fill="#6cbf4a"/>
      <path d="M20 12 C23 7 28 4 33 5 C28 7 24 9 20 12Z" fill="#6cbf4a"/>
      <path d="M20 12 C19 8 20 4 22 2 C22 6 21.5 9 20 12Z" fill="#7fd05a"/></g>
    ${pot("#3f7fd1","#5a98e6")}`);

  // ---------- ESTANTES ----------
  const frame = inner => svg(`${shadow(20,36,15,2)}<rect x="5.5" y="3.5" width="29" height="31" rx="1.8" fill="#9a643a" ${S}/>${inner}<rect x="5.5" y="3.5" width="29" height="31" rx="1.8" fill="none" ${S}/>${hl("M7 4.6 H33",1,.3)}`);
  const shelves = `<rect x="8" y="6" width="24" height="7.5" fill="#5f3b22"/><rect x="8" y="15.5" width="24" height="7.5" fill="#5f3b22"/><rect x="8" y="25" width="24" height="7" fill="#5f3b22"/>`;
  const BK = ["#d9534f","#3f7fd1","#e8b23a","#4aa36b","#8a63c9","#e2725b","#2f9e9a"];
  const row = (y,h,shift) => BK.map((_,k)=>{ const col=BK[(k+shift)%7]; const hh=h-((k+shift)%3);
    return `<rect x="${8.5+k*3}" y="${y+h-hh}" width="2.6" height="${hh}" rx=".4" fill="${col}" stroke="${O}" stroke-width=".6"/>`; }).join("");
  const livros = frame(`${shelves}${row(6.5,7,0)}${row(16,7,3)}<rect x="9" y="28.4" width="5" height="3.6" rx=".5" fill="#e8b23a" stroke="${O}" stroke-width=".6"/><rect x="10" y="26.2" width="4" height="2.2" rx=".5" fill="#d9534f" stroke="${O}" stroke-width=".6"/><circle cx="26" cy="29.5" r="2.4" fill="#f3efe6" stroke="${O}" stroke-width=".6"/>`);

  const garrafas = (y) => [0,1,2,3,4,5].map(k=>`<circle cx="${10.5+k*3.8}" cy="${y}" r="1.7" fill="${["#6b1f2a","#2f5d2a","#6b1f2a","#8a3b2a","#2f5d2a","#6b1f2a"][k]}" stroke="${O}" stroke-width=".6"/><circle cx="${10.1+k*3.8}" cy="${y-.5}" r=".5" fill="#fff" opacity=".5"/>`).join("");
  const vinhos = frame(`<rect x="8" y="6" width="24" height="26" fill="#5f3b22"/><path d="M8 6 L32 32 M32 6 L8 32" stroke="#9a643a" stroke-width="1.4"/>${garrafas(9.5)}${garrafas(15)}${garrafas(20.5)}${garrafas(26.5)}`);

  const pote = (x,y,h,c,tampa) => `<rect x="${x}" y="${y-h}" width="4.4" height="${h}" rx="1" fill="${c}" stroke="${O}" stroke-width=".6"/><rect x="${x-.3}" y="${y-h-1.4}" width="5" height="1.6" rx=".5" fill="${tampa}" stroke="${O}" stroke-width=".6"/><rect x="${x+.8}" y="${y-h+1}" width=".9" height="${h-2}" fill="#fff" opacity=".45"/>`;
  const potes = frame(`${shelves}${pote(9,13.5,5,"#f2c14e","#c0504d")}${pote(15,13.5,4,"#e98a5b","#3f7fd1")}${pote(21.5,13.5,5.5,"#9ccf7a","#c0504d")}${pote(27,13.5,4.5,"#f4e3c1","#4aa36b")}${pote(9.5,23,4.5,"#d8ecf2","#e8b23a")}${pote(16,23,5,"#c0504d","#f4e3c1")}<circle cx="25.5" cy="20" r="3" fill="#f4e3c1" stroke="${O}" stroke-width=".6"/><circle cx="25.5" cy="20" r="1.6" fill="#e8b23a"/><rect x="9" y="27" width="22" height="5" rx="1" fill="#e9dcc3" stroke="${O}" stroke-width=".6"/><path d="M14 27 V32 M20 27 V32 M26 27 V32" stroke="${O}" stroke-width=".5"/>`);

  const cx = (x,y,w,h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#c99a5b" stroke="${O}" stroke-width=".7"/><path d="M${x} ${y} L${x+w} ${y+h} M${x+w} ${y} L${x} ${y+h}" stroke="#8a5a33" stroke-width=".7"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#8a5a33" stroke-width="1.2" transform="translate(.6 .6) scale(1)" opacity="0"/>`;
  const caixas = frame(`${shelves}${cx(9,7.5,7,6)}${cx(17,9,5,4.5)}${cx(23.5,7,7.5,6.5)}<rect x="9" y="18.5" width="8" height="4.5" rx=".6" fill="#7a9cc6" stroke="${O}" stroke-width=".7"/><rect x="11" y="17.2" width="4" height="1.5" rx=".4" fill="#5e7fa8" stroke="${O}" stroke-width=".5"/>${cx(19,17,6,6)}<path d="M27 23 V18 C27 16.5 30.5 16.5 30.5 18 V23Z" fill="#c0504d" stroke="${O}" stroke-width=".7"/>${cx(9.5,26,9,6)}<rect x="21" y="27.5" width="9" height="4.5" rx=".6" fill="#e8b23a" stroke="${O}" stroke-width=".7"/>`);

  // ---------- PIANO ----------
  const keys = [...Array(10)].map((_,k)=>`<rect x="${8.5+k*2.3}" y="29" width="2.3" height="5" fill="#fff" stroke="${O}" stroke-width=".45"/>`).join("")
    + [0,1,3,4,5,7,8].map(k=>`<rect x="${10.1+k*2.3}" y="29" width="1.3" height="3" fill="#222"/>`).join("");
  const piano = svg(`${shadow(20,36.5,15,2)}
    <path d="M7 29 V12 C7 6 12 3.5 18 3.5 C25 3.5 27 8 29 11 C31 14 33 15 33 19 V29Z" fill="#26262e" ${S}/>
    <path d="M10 27 V13 C10 8.5 13.5 6.5 18 6.5 C23 6.5 24.5 9.5 26.5 12.5 C28 15 30 16 30 19.5 V27Z" fill="#3a3a46"/>
    ${hl("M12 12 C13 9 15.5 8.2 18.5 8.4",1.2,.35)}
    <rect x="7" y="27.5" width="26" height="2" fill="#1b1b22" ${S}/>${keys}
    <rect x="8.5" y="29" width="23" height="5" fill="none" stroke="${O}" stroke-width="1"/>`);

  // ---------- MESAS ----------
  const madeira = svg(`${shadow(20,35.5,14,2)}
    <rect x="9" y="20" width="3.4" height="14" rx="1" fill="#7a4a26" ${S}/><rect x="27.6" y="20" width="3.4" height="14" rx="1" fill="#7a4a26" ${S}/>
    <rect x="5" y="18" width="30" height="5" rx="1.2" fill="#8f5a2e" ${S}/>
    <rect x="5" y="7" width="30" height="13" rx="2" fill="#c8874a" ${S}/>
    <path d="M7 11.4 H33 M7 15.6 H33" stroke="#9b6233" stroke-width=".8"/>${hl("M8 9 H24")}`);

  const redonda = svg(`${shadow(20,35,14,2.4)}
    <path d="M5 16 C5 12 35 12 35 16 L33 30 C27 33 13 33 7 30Z" fill="#f6f1e7" ${S}/>
    <path d="M7 30 C13 33 27 33 33 30" stroke="#c0504d" stroke-width="1.6" fill="none"/>
    <path d="M11 19 L10 30 M20 20 V32 M29 19 L30 30" stroke="#d8cfc0" stroke-width=".9"/>
    <ellipse cx="20" cy="15" rx="15" ry="5.5" fill="#fffaf2" ${S}/>
    <ellipse cx="14" cy="14.5" rx="3.2" ry="1.6" fill="#fff" stroke="${O}" stroke-width=".6"/>
    <path d="M24 10 V15.5 M22.6 15.5 H25.4" stroke="${O}" stroke-width=".7"/><path d="M22.8 10 C22.8 13 25.2 13 25.2 10Z" fill="#c0504d" stroke="${O}" stroke-width=".6"/>
    <path d="M27.5 12.5 V15 M29.5 12.5 V15" stroke="#3a3a46" stroke-width=".8"/><circle cx="28.5" cy="12" r="1" fill="#f2c14e"/>`);

  const bancada = svg(`${shadow(20,35.5,14,2)}
    <rect x="7" y="20" width="3" height="14" fill="#7d858f" ${S}/><rect x="30" y="20" width="3" height="14" fill="#7d858f" ${S}/>
    <path d="M10 28 H30" stroke="${O}" stroke-width="2.2"/><path d="M10 28 H30" stroke="#9aa3ad" stroke-width="1"/>
    <rect x="5" y="17" width="30" height="5" rx="1" fill="#6d757f" ${S}/>
    <rect x="5" y="8" width="30" height="11" rx="1.5" fill="#aab4be" ${S}/>${hl("M8 10 H26",1,.55)}
    <rect x="9" y="11" width="7" height="4" rx=".8" fill="#e8b23a" stroke="${O}" stroke-width=".7"/>
    <path d="M22 14.5 L29 11" stroke="${O}" stroke-width="1.6" stroke-linecap="round"/><circle cx="29.5" cy="10.8" r="1.4" fill="none" stroke="${O}" stroke-width="1"/>
    <path d="M19 13 C19 11 21 11 21 13 L21.5 16 H18.5Z" fill="#9ccf7a" stroke="${O}" stroke-width=".6"/>`);

  const escrivaninha = svg(`${shadow(20,35.5,14,2)}
    <rect x="5" y="18" width="10" height="16" rx="1" fill="#8f5a2e" ${S}/><path d="M7 24 H13 M7 29 H13" stroke="${O}" stroke-width=".7"/><circle cx="10" cy="21.5" r=".7" fill="#e8b23a"/><circle cx="10" cy="26.5" r=".7" fill="#e8b23a"/>
    <rect x="28" y="20" width="3.2" height="14" rx="1" fill="#7a4a26" ${S}/>
    <rect x="4" y="13" width="32" height="6" rx="1.4" fill="#a96a35" ${S}/>${hl("M7 14.6 H30")}
    <rect x="16" y="9.5" width="8" height="4" rx=".4" fill="#fbf7ee" stroke="${O}" stroke-width=".6" transform="rotate(-6 20 11.5)"/>
    <path d="M26 13 L28 8 M26.5 6 L32 6.5 L30.5 9.5 L26 9Z" stroke="${O}" stroke-width=".8" fill="#4aa36b"/>
    <path d="M9 13 V10" stroke="${O}" stroke-width=".8"/><circle cx="9" cy="9" r="1.6" fill="#c0504d" stroke="${O}" stroke-width=".6"/>`);

  // ---------- CADEIRAS ----------
  const cadeira = svg(`${shadow(20,35.5,10,1.8)}
    <rect x="11" y="24" width="2.6" height="10.5" rx=".8" fill="#7a4a26" ${S}/><rect x="26.4" y="24" width="2.6" height="10.5" rx=".8" fill="#7a4a26" ${S}/>
    <rect x="11" y="5" width="2.8" height="20" rx=".8" fill="#9a5f30" ${S}/><rect x="26.2" y="5" width="2.8" height="20" rx=".8" fill="#9a5f30" ${S}/>
    <rect x="10" y="4" width="20" height="5" rx="1.6" fill="#b8763d" ${S}/>
    <path d="M17 9 V19 M20 9 V19 M23 9 V19" stroke="${O}" stroke-width="1.6" stroke-linecap="round"/><path d="M17 9 V19 M20 9 V19 M23 9 V19" stroke="#b8763d" stroke-width=".6" stroke-linecap="round"/>
    <rect x="9" y="19.5" width="22" height="5.5" rx="1.6" fill="#c8874a" ${S}/>${hl("M11.5 21.2 H25",1)}${hl("M12 5.8 H24",1,.35)}`);

  const poltrona = (c, d, l) => svg(`${shadow(20,35.5,13,2)}
    <rect x="10" y="30" width="2.4" height="4.5" rx=".6" fill="#5f3b22" ${s1}/><rect x="27.6" y="30" width="2.4" height="4.5" rx=".6" fill="#5f3b22" ${s1}/>
    <path d="M10 22 V8 C10 4.5 30 4.5 30 8 V22Z" fill="${c}" ${S}/>
    <path d="M13.5 9 C13.5 7 26.5 7 26.5 9 V20 H13.5Z" fill="${d}" opacity=".55"/>
    <rect x="11" y="19" width="18" height="12" rx="3" fill="${c}" ${S}/>${hl("M14 21.5 H25",1.2,.45)}
    <rect x="5.5" y="15" width="6.5" height="16" rx="3" fill="${c}" ${S}/><rect x="28" y="15" width="6.5" height="16" rx="3" fill="${c}" ${S}/>
    ${hl("M7.5 17.5 V23",1.2,.5)}${hl("M30 17.5 V23",1.2,.5)}${hl("M13 7.5 C16 6.2 24 6.2 27 7.5",1.1,.45)}
    <circle cx="20" cy="13" r=".8" fill="${l}"/><circle cx="16" cy="13" r=".7" fill="${l}"/><circle cx="24" cy="13" r=".7" fill="${l}"/>`);

  const banquinho = svg(`${shadow(20,35.5,9,1.8)}
    <path d="M13 17 L10.5 34.5 M27 17 L29.5 34.5 M17 18 L16.5 34.5 M23 18 L23.5 34.5" stroke="${O}" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M13 17 L10.5 34.5 M27 17 L29.5 34.5 M17 18 L16.5 34.5 M23 18 L23.5 34.5" stroke="#8f5a2e" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M12.5 27 H27.5" stroke="${O}" stroke-width="2"/><path d="M12.5 27 H27.5" stroke="#8f5a2e" stroke-width=".7"/>
    <ellipse cx="20" cy="15" rx="10" ry="4" fill="#c0504d" ${S}/><ellipse cx="20" cy="13.8" rx="10" ry="3.6" fill="#e05d5d" ${S}/>${hl("M14 13 C16 12 20 11.8 23 12.2",1,.5)}`);

  const espreguicadeira = svg(`${shadow(20,35,8.5,2)}
    <rect x="12" y="3" width="16" height="32" rx="3" fill="#f6f1e7" ${S}/>
    <rect x="13.5" y="4.5" width="13" height="10" rx="2" fill="#3f9fd1" stroke="${O}" stroke-width=".8"/>
    <path d="M13.5 15 H26.5" stroke="${O}" stroke-width="1"/>
    ${[17,20.5,24,27.5,31].map(y=>`<rect x="13.5" y="${y}" width="13" height="2.4" rx=".6" fill="${y%2?"#3f9fd1":"#f6f1e7"}" stroke="${O}" stroke-width=".5"/>`).join("")}
    <rect x="15.5" y="6.5" width="9" height="3.5" rx="1.6" fill="#fff" stroke="${O}" stroke-width=".6"/>${hl("M14.5 5.8 H22",1,.5)}`);

  const banco = svg(`${shadow(20,34.5,14,2)}
    <path d="M9 34 V24 M31 34 V24" stroke="${O}" stroke-width="3" stroke-linecap="round"/><path d="M9 34 V24 M31 34 V24" stroke="#4a4f57" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M7 22 C4 22 4 15 8 15 M33 22 C36 22 36 15 32 15" stroke="${O}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M7 22 C4 22 4 15 8 15 M33 22 C36 22 36 15 32 15" stroke="#4a4f57" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <rect x="8" y="7" width="24" height="3.6" rx="1.4" fill="#3f8a5e" ${S}/><rect x="8" y="11.6" width="24" height="3.6" rx="1.4" fill="#3f8a5e" ${S}/>
    <path d="M10 10 V19 M30 10 V19" stroke="${O}" stroke-width="2"/>
    <rect x="7" y="18" width="26" height="3.4" rx="1.3" fill="#4fa070" ${S}/><rect x="7" y="21.6" width="26" height="3" rx="1.2" fill="#3f8a5e" ${S}/>
    ${hl("M10 19.2 H27",1,.5)}${hl("M10.5 8.3 H27",1,.4)}`);

  const clean = s => s.replace(/\s*\n\s*/g, "");
  const V = {
    planta: { vaso, arbusto, arvore, cacto, palmeira },
    estante: { livros, vinhos, potes, caixas },
    piano: { piano },
    mesa: { madeira, redonda, bancada, escrivaninha },
    cadeira: { cadeira, poltrona: poltrona("#c94c4c","#8e2f2f","#f2c14e"), poltronaAzul: poltrona("#3f6fb5","#274b85","#f2c14e"), poltronaVerde: poltrona("#3f8a5e","#25603e","#f2c14e"), banquinho, espreguicadeira, banco }
  };
  for (const k in V) for (const j in V[k]) V[k][j] = clean(V[k][j]);
  const BASE = { planta: V.planta.vaso, estante: V.estante.livros, piano: V.piano.piano, mesa: V.mesa.madeira, cadeira: V.cadeira.cadeira };

  // Variação de cada objeto por cômodo. O que não está aqui usa a versão básica.
  const ROOM = {
    "Cozinha":{estante:"potes",cadeira:"banquinho"}, "Biblioteca":{cadeira:"poltronaVerde"}, "Salão":{cadeira:"poltrona"},
    "Adega":{estante:"vinhos",planta:"vaso"}, "Escritório":{mesa:"escrivaninha",cadeira:"poltronaVerde"}, "Estufa":{planta:"arbusto",cadeira:"banco"},
    "Capela":{cadeira:"banco"}, "Sala de Música":{cadeira:"poltronaAzul"},
    "Locomotiva":{mesa:"bancada",estante:"caixas",cadeira:"banquinho"}, "Vagão-Restaurante":{mesa:"redonda"}, "Bagageiro":{estante:"caixas",cadeira:"banquinho"},
    "Vagão-Leito":{cadeira:"poltronaAzul"}, "Vagão-Bar":{estante:"vinhos",cadeira:"banquinho",mesa:"redonda"}, "Corredor":{cadeira:"poltrona"},
    "Cabine Real":{cadeira:"poltrona",mesa:"escrivaninha"}, "Vagão-Correio":{estante:"caixas",mesa:"escrivaninha"},
    "Convés":{cadeira:"espreguicadeira",planta:"palmeira",estante:"caixas"}, "Ponte de Comando":{mesa:"escrivaninha",cadeira:"banquinho"}, "Casa de Máquinas":{mesa:"bancada",estante:"caixas",cadeira:"banquinho"},
    "Cozinha de Bordo":{estante:"potes",cadeira:"banquinho"}, "Salão de Baile":{mesa:"redonda",cadeira:"poltrona",planta:"palmeira"}, "Camarote":{cadeira:"poltronaAzul"},
    "Porão":{estante:"caixas",mesa:"bancada",cadeira:"banquinho"}, "Enfermaria":{estante:"potes",mesa:"bancada"},
    "Palco":{cadeira:"poltrona"}, "Coxia":{estante:"caixas",cadeira:"banquinho",mesa:"bancada"}, "Camarim":{cadeira:"banquinho",mesa:"escrivaninha"},
    "Plateia":{cadeira:"poltrona"}, "Bilheteria":{mesa:"escrivaninha",cadeira:"banquinho"}, "Fosso da Orquestra":{cadeira:"banquinho"},
    "Sala de Figurinos":{estante:"caixas",mesa:"bancada"}, "Foyer":{mesa:"redonda",cadeira:"poltrona",planta:"palmeira"},
    "Recepção":{mesa:"escrivaninha",cadeira:"poltronaAzul",planta:"palmeira"}, "Restaurante":{mesa:"redonda",estante:"vinhos"}, "Piscina":{cadeira:"espreguicadeira",planta:"palmeira",mesa:"redonda"},
    "Suíte Presidencial":{cadeira:"poltrona",mesa:"escrivaninha"}, "Lavanderia":{estante:"caixas",mesa:"bancada",cadeira:"banquinho"}, "Academia":{estante:"caixas",cadeira:"banco"},
    "Terraço":{cadeira:"espreguicadeira",planta:"palmeira",mesa:"redonda"}, "Spa":{cadeira:"espreguicadeira",planta:"palmeira",estante:"potes"},
    "Sala Egípcia":{planta:"cacto",estante:"caixas"}, "Galeria":{cadeira:"banco"}, "Reserva Técnica":{estante:"caixas",mesa:"bancada",cadeira:"banquinho"},
    "Café":{mesa:"redonda",estante:"potes",cadeira:"banquinho"}, "Laboratório":{mesa:"bancada",estante:"potes",cadeira:"banquinho"}, "Sala dos Fósseis":{planta:"cacto",estante:"caixas",cadeira:"banco"},
    "Hall":{cadeira:"banco",planta:"palmeira"}, "Sala das Joias":{cadeira:"poltronaAzul"},
    "Picadeiro":{cadeira:"banquinho",estante:"caixas"}, "Trailer":{cadeira:"banquinho",estante:"potes"}, "Jaula":{planta:"arbusto",estante:"caixas",cadeira:"banquinho"},
    "Arquibancada":{cadeira:"banco"}, "Lona de Ensaio":{estante:"caixas",cadeira:"banquinho"},
    "Casarão":{cadeira:"poltrona"}, "Celeiro":{estante:"caixas",mesa:"bancada",cadeira:"banquinho"}, "Curral":{planta:"arbusto",cadeira:"banco",estante:"caixas"},
    "Pomar":{planta:"arvore",cadeira:"banco"}, "Moinho":{estante:"caixas",mesa:"bancada"}, "Alambique":{estante:"vinhos",mesa:"bancada"}
  };
  const forRoom = (o, room) => { const v = ROOM[room] && ROOM[room][o]; return (v && V[o][v]) || BASE[o]; };
  return { ...BASE, V, ROOM, forRoom };
})();

  return { T, R, rugSVG, FURN };
})();
