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
  const FURN = MOVEIS;
  return { T, R, rugSVG, FURN };
})();
