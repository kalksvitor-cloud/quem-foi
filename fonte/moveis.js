// Móveis em estilo ilustrado: contorno escuro fino, luz e sombra.
const MOVEIS = (() => {
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
if (typeof module !== "undefined") module.exports = MOVEIS;
