// Retratos ilustrados: gera um SVG a partir do nome completo, gênero e cor de fundo.
// O título (Chef, Capitã, Mágico...) define o acessório; o nome define pele, cabelo e roupa.
const AV = (() => {
  const SKIN = ["#f9d7c0","#f1c09c","#e0a77f","#c58358","#9c6440","#6e4630"];
  const HAIR = ["#2b1d16","#4a3020","#7a4a26","#b5772e","#e2b85c","#1d1d22","#8f2f1f","#c9c4bd"];
  const CLOTH = ["#3b5bdb","#e8590c","#2b8a3e","#862e9c","#c92a2a","#1098ad","#5c5f66","#f59f00","#364fc7","#a61e4d"];
  const hash = s => { let h=2166136261; for (const ch of s) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return h>>>0; };
  const ROLE = {
    Condessa:"tiara pearls", Duquesa:"tiara pearls", Lady:"tiara pearls", Hóspede:"pearls glassesR",
    "Dr.":"glasses coat", "Dra.":"glasses coat", Farmacêutico:"coat glasses", Enfermeiro:"coat nurse",
    Chef:"chef white", Cozinheiro:"chef white", Cozinheira:"chef white",
    Coronel:"military mustache", Almirante:"navycap mustache", Capitã:"navycap", Imediato:"navycap",
    Madame:"scarf earrings", Vidente:"scarf earrings", Mordomo:"bowtie suit slick", "Srta.":"bow",
    Prima:"bow earrings", Herdeira:"bow", Capataz:"straw mustache", Peão:"straw", Jardineiro:"straw beard",
    Dona:"bun glassesR gray", Veterinária:"pony green", Governanta:"bun dark", Jornalista:"beret",
    Notário:"glasses suit tie", Juiz:"glasses suit gray", Delegado:"fedora mustache", Agente:"fedora suit tie",
    Inspetor:"fedora suit", Fiscal:"cap suit tie", Maquinista:"railcap", Condutora:"railcap", Chefe:"railcap mustache",
    Fotógrafa:"beret", Padre:"collar", Frei:"collar bald", Carteador:"visor bowtie", Cantora:"flower earrings lips",
    Foguista:"railcap soot", Garçom:"bowtie", Barman:"bowtie mustache", Carregador:"bellhop", Mensageiro:"bellhop",
    Banqueiro:"suit tie monocle", Empresário:"suit tie", Marujo:"sailor", Grumete:"sailor", Turista:"sunhat shades",
    Escritora:"glasses scarfN", Mergulhador:"goggles", Comissária:"bellhop", Comissário:"bellhop suit",
    Telegrafista:"phones", Diretora:"glasses scarfN", Ator:"cravat", Atriz:"earrings lips", Contrarregra:"capback",
    Costureira:"glassesR", Iluminador:"phones", Crítico:"glasses bowtie", Domadora:"ringhat", Palhaço:"clown",
    Trapezista:"band", Mágico:"tophat cape", Malabarista:"band", Dono:"ringhat mustache", Bailarina:"bun",
    Bilheteira:"visor", Ventríloquo:"bowtie", Gerente:"glasses suit", Recepcionista:"bellhop tie", Camareira:"maid",
    Sommelier:"bowtie mustache", Influencer:"shadesUp lips", Curadora:"glasses", Vigia:"guardcap mustache",
    Restauradora:"glasses", Arqueólogo:"pith beard", Estagiária:"pony glasses", Colecionador:"monocle suit",
    Guia:"cap", Pianista:"bowtie", Maestro:"bowtie gray", Ourives:"monocle", "Prof.":"glasses beard gray",
    Leiloeiro:"bowtie suit", Paparazzo:"cap", Telegrafista2:"", Ezequiel:"", Sr:"", Seu:"straw gray",
    "Sr.":"suit tie", "Sra.":"pearls", Barão:"suit tie mustache gray", Tia:"bun glassesR gray", Frei2:"",
    Legista:"coat glasses", Cocheiro:"cap", Arrumadeira:"maid", Pintor:"beret", Enfermeira:"nurse", Caseira:"straw", Padeiro:"chef white", Mecânico:"capback", Engraxate:"cap", Músico:"bowtie", Professora:"glasses", Pescador:"straw beard", Dançarina:"flower earrings lips", Acrobata:"band", Maquiadora:"lips earrings", Porteiro:"guardcap", Mímico:"beret", Equilibrista:"band", Bilheteiro:"visor", Segurança:"guardcap", Estagiário:"glasses", Ourive:"", Modista:"glassesR earrings", Parteira:"bun gray"
  };
  function svg(full, g, bg, dead){
    const words = full.split(" "), h = hash(full);
    const tags = new Set((ROLE[words[0]]||"").split(" ").filter(Boolean));
    const f = g==="f";
    const skin = SKIN[h % SKIN.length];
    let hc = HAIR[(h>>>4) % (HAIR.length-1)]; if (tags.has("gray") || (h>>>9)%9===0) hc = HAIR[7];
    let cloth = CLOTH[(h>>>12) % CLOTH.length];
    if (tags.has("white")||tags.has("coat")) cloth="#f4f4f2";
    if (tags.has("suit")||tags.has("dark")||tags.has("collar")) cloth = ["#2b2f3a","#3a3550","#30403a"][(h>>>3)%3];
    if (tags.has("military")) cloth="#5c6b3a"; if (tags.has("green")) cloth="#2b8a3e";
    if (tags.has("sailor")) cloth="#f4f4f2";
    const hs = f ? ["long","bob","bun","pony","curlyL","long"][(h>>>16)%6] : ["short","side","curly","buzz","short","bald"][(h>>>16)%6];
    let style = hs; if (tags.has("bun")) style="bun"; if (tags.has("pony")) style="pony"; if (tags.has("bald")) style="bald"; if (tags.has("slick")) style="side";
    const sk2 = shade(skin,-18);
    let o = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="c"><circle cx="32" cy="32" r="32"/></clipPath></defs><g clip-path="url(#c)"${dead?' style="filter:grayscale(1)"':''}>`;
    o += `<rect width="64" height="64" fill="${bg}"/>`;
    // cabelo de trás
    if (style==="long"||style==="curlyL") o += `<path d="M16 30 Q16 12 32 12 Q48 12 48 30 L50 52 Q32 58 14 52 Z" fill="${hc}"/>`;
    if (style==="pony") o += `<path d="M44 22 Q56 30 50 48 Q46 40 44 30Z" fill="${hc}"/>`;
    // corpo
    o += `<path d="M6 66 Q8 46 32 46 Q56 46 58 66Z" fill="${cloth}"/>`;
    if (tags.has("cape")) o += `<path d="M6 66 Q8 46 20 47 L32 64 L44 47 Q56 46 58 66Z" fill="#7a1020"/>`;
    o += `<rect x="27" y="38" width="10" height="10" rx="3" fill="${sk2}"/>`;
    if (tags.has("coat")) o += `<path d="M26 47 L32 58 L38 47 L35 46 L32 52 L29 46Z" fill="${["#74c0fc","#ced4da","#b2f2bb"][h%3]}"/>`;
    if (tags.has("suit")||tags.has("tie")) o += `<path d="M27 46 L32 55 L37 46Z" fill="#fff"/>`;
    if (tags.has("tie")) o += `<path d="M31 48 L33 48 L34 58 L32 61 L30 58Z" fill="${["#c92a2a","#1971c2","#f08c00"][h%3]}"/>`;
    if (tags.has("bowtie")) o += `<path d="M26 48 L32 50 L38 48 L38 53 L32 51 L26 53Z" fill="${tags.has("suit")?"#c92a2a":"#1d1d22"}"/>`;
    if (tags.has("collar")) o += `<rect x="29" y="46" width="6" height="4" rx="1" fill="#fff"/>`;
    if (tags.has("sailor")) o += `<path d="M22 47 L32 56 L42 47 L42 52 L32 60 L22 52Z" fill="#1c4f9c"/>`;
    if (tags.has("pearls")) for (let k=0;k<7;k++){ const a=Math.PI*(0.15+0.7*k/6); o+=`<circle cx="${32-Math.cos(a)*8}" cy="${45+Math.sin(a)*5}" r="1.6" fill="#fffaf0" stroke="#d8cfc0" stroke-width=".4"/>`; }
    if (tags.has("cravat")||tags.has("scarfN")) o += `<path d="M24 45 Q32 51 40 45 L38 52 Q32 55 26 52Z" fill="${["#e64980","#fab005","#15aabf"][h%3]}"/>`;
    if (tags.has("clown")) { o += `<circle cx="24" cy="54" r="3" fill="#fab005"/><circle cx="40" cy="54" r="3" fill="#40c057"/>`; }
    // rosto
    o += `<circle cx="18.5" cy="31" r="3.2" fill="${sk2}"/><circle cx="45.5" cy="31" r="3.2" fill="${sk2}"/>`;
    o += `<ellipse cx="32" cy="29" rx="13.5" ry="15" fill="${skin}"/>`;
    // cabelo da frente
    const H = {
      short:`<path d="M18 27 Q17 13 32 13 Q47 13 46 27 Q44 19 32 19 Q22 19 18 27Z" fill="${hc}"/>`,
      side:`<path d="M18 28 Q16 12 33 13 Q48 14 46 28 Q42 18 30 18 Q24 22 18 28Z" fill="${hc}"/>`,
      curly:[...Array(7)].map((_,k)=>`<circle cx="${19+k*4.3}" cy="${17+((k%2)?-2:1)}" r="4.6" fill="${hc}"/>`).join(""),
      buzz:`<path d="M19 24 Q19 14 32 14 Q45 14 45 24 Q40 18 32 18 Q24 18 19 24Z" fill="${hc}" opacity=".85"/>`,
      bald:`<path d="M18.5 30 Q18 25 20 23 L20 31Z M45.5 30 Q46 25 44 23 L44 31Z" fill="${hc}"/>`,
      long:`<path d="M18 30 Q17 13 32 13 Q47 13 46 30 Q44 20 36 18 Q30 24 18 30Z" fill="${hc}"/>`,
      bob:`<path d="M16 38 Q14 12 32 12 Q50 12 48 38 L44 38 Q46 22 38 19 Q30 24 20 26 L20 38Z" fill="${hc}"/>`,
      bun:`<circle cx="32" cy="10" r="6" fill="${hc}"/><path d="M18 27 Q17 14 32 14 Q47 14 46 27 Q42 19 32 19 Q22 19 18 27Z" fill="${hc}"/>`,
      pony:`<path d="M18 27 Q17 13 32 13 Q47 13 46 27 Q42 19 32 19 Q22 19 18 27Z" fill="${hc}"/>`,
      curlyL:[...Array(7)].map((_,k)=>`<circle cx="${18+k*4.6}" cy="${16+((k%2)?-2:1)}" r="5" fill="${hc}"/>`).join("")
    };
    if (!tags.has("clown")) o += H[style];
    else o += `<circle cx="18" cy="20" r="7" fill="#f03e3e"/><circle cx="46" cy="20" r="7" fill="#f03e3e"/><circle cx="32" cy="14" r="6" fill="#f03e3e"/>`;
    // olhos, boca
    o += `<circle cx="26.5" cy="30" r="1.7" fill="#2b2b2b"/><circle cx="37.5" cy="30" r="1.7" fill="#2b2b2b"/>`;
    o += `<path d="M24 25.5 Q26.5 24 29 25.5 M35 25.5 Q37.5 24 40 25.5" stroke="${shade(hc,-10)}" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
    if (f) o += `<circle cx="23.5" cy="35" r="2.4" fill="#ff8787" opacity=".35"/><circle cx="40.5" cy="35" r="2.4" fill="#ff8787" opacity=".35"/>`;
    const lips = tags.has("lips") ? "#d6336c" : shade(skin,-45);
    o += dead ? `<path d="M28 38 L36 38" stroke="${lips}" stroke-width="1.6" stroke-linecap="round"/>` : `<path d="M27.5 37 Q32 40.5 36.5 37" stroke="${lips}" stroke-width="${tags.has("lips")?2.2:1.6}" fill="none" stroke-linecap="round"/>`;
    if (tags.has("clown")) o += `<circle cx="32" cy="33" r="3" fill="#f03e3e"/>`;
    if (!f && (tags.has("mustache") || (h>>>20)%6===0)) o += `<path d="M26 35 Q29 32.5 32 34.5 Q35 32.5 38 35 Q35 36.5 32 35.5 Q29 36.5 26 35Z" fill="${hc}"/>`;
    if (!f && (tags.has("beard") || (h>>>22)%7===0)) o += `<path d="M19 30 Q20 44 32 45 Q44 44 45 30 Q42 40 32 40 Q22 40 19 30Z" fill="${hc}"/>`;
    if (tags.has("soot")) o += `<circle cx="24" cy="36" r="2" fill="#495057" opacity=".5"/><circle cx="41" cy="27" r="1.5" fill="#495057" opacity=".5"/>`;
    // óculos
    if (tags.has("glasses")||tags.has("glassesR")) { const r=tags.has("glassesR"); o += `<g stroke="#2b2b2b" stroke-width="1.3" fill="#ffffff33">${r?`<circle cx="26.5" cy="30" r="4"/><circle cx="37.5" cy="30" r="4"/>`:`<rect x="22" y="26.5" width="9" height="7" rx="2"/><rect x="33" y="26.5" width="9" height="7" rx="2"/>`}<path d="M30.5 30 L33.5 30"/></g>`; }
    if (tags.has("monocle")) o += `<circle cx="37.5" cy="30" r="4" stroke="#e0a800" stroke-width="1.4" fill="#ffffff33"/><path d="M41 32 Q43 40 40 46" stroke="#e0a800" stroke-width=".8" fill="none"/>`;
    if (tags.has("shades")) o += `<path d="M21 27 L43 27 L42 32 Q38 34 34 31 L30 31 Q26 34 22 32Z" fill="#1d1d22"/>`;
    if (tags.has("shadesUp")) o += `<path d="M21 15 L43 15 L42 19 Q38 21 34 18 L30 18 Q26 21 22 19Z" fill="#1d1d22"/>`;
    if (tags.has("goggles")) o += `<rect x="19" y="14" width="26" height="7" rx="3.5" fill="#15aabf" stroke="#1d1d22" stroke-width="1.2"/>`;
    if (tags.has("earrings")) o += `<circle cx="18.5" cy="36" r="2" fill="#fcc419"/><circle cx="45.5" cy="36" r="2" fill="#fcc419"/>`;
    // chapéus
    const HAT = {
      chef:`<path d="M20 20 L44 20 L44 13 Q50 6 43 3 Q38 -3 32 2 Q26 -3 21 3 Q14 6 20 13Z" fill="#fff" stroke="#dee2e6"/>`,
      navycap:`<path d="M17 18 Q32 6 47 18 L46 21 L18 21Z" fill="#fff"/><rect x="17" y="19" width="30" height="4" rx="1" fill="#1d1d22"/><circle cx="32" cy="15" r="2.2" fill="#fcc419"/>`,
      military:`<path d="M18 18 Q32 7 46 18 L46 21 L18 21Z" fill="#5c6b3a"/><rect x="17" y="19" width="30" height="3.5" rx="1" fill="#2b2f1a"/><circle cx="32" cy="15" r="2" fill="#fcc419"/>`,
      tiara:`<path d="M22 17 L25 11 L28.5 15 L32 8 L35.5 15 L39 11 L42 17Z" fill="#fcc419"/><circle cx="32" cy="12" r="1.6" fill="#e64980"/>`,
      scarf:`<path d="M15 26 Q16 9 32 9 Q48 9 49 26 Q44 18 32 18 Q20 18 15 26Z" fill="#7048e8"/><circle cx="32" cy="12" r="2" fill="#fcc419"/>`,
      straw:`<ellipse cx="32" cy="17" rx="21" ry="5" fill="#e9c46a"/><path d="M22 17 Q22 6 32 6 Q42 6 42 17Z" fill="#f4d58d"/><rect x="22" y="13" width="20" height="3" fill="#a0522d"/>`,
      beret:`<ellipse cx="30" cy="14" rx="15" ry="6" fill="${["#c92a2a","#1d1d22","#5f3dc4"][h%3]}"/><circle cx="31" cy="8" r="1.5" fill="#1d1d22"/>`,
      fedora:`<ellipse cx="32" cy="17" rx="19" ry="4.5" fill="#3d3a35"/><path d="M21 17 Q21 5 32 6 Q43 5 43 17Z" fill="#4e4a44"/><rect x="21" y="13" width="22" height="3" fill="#1d1d22"/>`,
      railcap:`<path d="M19 19 Q19 8 32 8 Q45 8 45 19Z" fill="${tags.has("soot")?"#495057":"#1c4f9c"}"/><path d="M18 19 L46 19 L44 23 L20 23Z" fill="#1d1d22"/>`,
      cap:`<path d="M19 19 Q19 8 32 8 Q45 8 45 19Z" fill="${["#e03131","#1971c2","#2f9e44"][h%3]}"/><path d="M30 19 L50 19 Q48 23 30 22Z" fill="#1d1d22"/>`,
      capback:`<path d="M19 19 Q19 8 32 8 Q45 8 45 19Z" fill="#f08c00"/><path d="M14 19 L34 19 L34 22 Q16 23 14 19Z" fill="#1d1d22"/>`,
      guardcap:`<path d="M18 18 Q32 8 46 18 L46 21 L18 21Z" fill="#1c3d73"/><rect x="18" y="19" width="28" height="4" fill="#111"/><circle cx="32" cy="15" r="2" fill="#fcc419"/>`,
      bellhop:`<rect x="23" y="7" width="18" height="10" rx="2" fill="#e03131"/><rect x="23" y="14" width="18" height="2" fill="#fcc419"/>`,
      sailor:`<path d="M20 17 Q20 9 32 9 Q44 9 44 17Z" fill="#fff" stroke="#dee2e6"/><rect x="19" y="15" width="26" height="3" fill="#1c4f9c"/>`,
      sunhat:`<ellipse cx="32" cy="16" rx="22" ry="5" fill="#ffd43b"/><path d="M22 16 Q22 6 32 6 Q42 6 42 16Z" fill="#ffe066"/><rect x="22" y="12" width="20" height="3" fill="#f06595"/>`,
      tophat:`<rect x="22" y="-2" width="20" height="17" fill="#1d1d22"/><rect x="22" y="10" width="20" height="3" fill="#c92a2a"/><ellipse cx="32" cy="15" rx="16" ry="3.5" fill="#1d1d22"/>`,
      ringhat:`<rect x="22" y="-2" width="20" height="17" fill="#c92a2a"/><rect x="22" y="10" width="20" height="3" fill="#fcc419"/><ellipse cx="32" cy="15" rx="16" ry="3.5" fill="#c92a2a"/>`,
      pith:`<ellipse cx="32" cy="17" rx="20" ry="4.5" fill="#c2a878"/><path d="M20 17 Q20 4 32 4 Q44 4 44 17Z" fill="#d8c08f"/>`,
      visor:`<path d="M18 19 L46 19 Q44 25 32 24 Q20 25 18 19Z" fill="#2f9e44" opacity=".85"/>`,
      band:`<rect x="18" y="18" width="28" height="4" rx="2" fill="${["#e64980","#fab005","#12b886"][h%3]}"/>`,
      maid:`<path d="M21 17 Q32 10 43 17 L42 20 Q32 15 22 20Z" fill="#fff" stroke="#dee2e6"/>`,
      bow:`<path d="M38 13 L44 9 L44 17Z M38 13 L32 9 L32 17Z" fill="${["#e64980","#7950f2","#fab005"][h%3]}"/><circle cx="38" cy="13" r="1.8" fill="#fff"/>`,
      flower:`<g transform="translate(43 15)">${[0,72,144,216,288].map(a=>`<circle cx="${Math.cos(a*Math.PI/180)*3}" cy="${Math.sin(a*Math.PI/180)*3}" r="2.4" fill="#ff6b6b"/>`).join("")}<circle r="1.8" fill="#fcc419"/></g>`,
      phones:`<path d="M17 30 Q17 10 32 10 Q47 10 47 30" stroke="#343a40" stroke-width="2.5" fill="none"/><rect x="14" y="26" width="6" height="9" rx="2" fill="#343a40"/><rect x="44" y="26" width="6" height="9" rx="2" fill="#343a40"/>`,
      nurse:`<rect x="25" y="9" width="14" height="6" rx="1" fill="#fff" stroke="#dee2e6"/><path d="M31 10.5 h2 v1.2 h1.2 v2 h-1.2 v1.2 h-2 v-1.2 h-1.2 v-2 h1.2z" fill="#e03131"/>`
    };
    for (const t of tags) if (HAT[t]) o += HAT[t];
    o += `</g></svg>`;
    return o;
  }
  function shade(hex, amt){ const n=parseInt(hex.slice(1),16); let r=(n>>16)+amt,g=((n>>8)&255)+amt,b=(n&255)+amt; r=Math.max(0,Math.min(255,r)); g=Math.max(0,Math.min(255,g)); b=Math.max(0,Math.min(255,b)); return "#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1); }
  return { svg };
})();
if (typeof module !== "undefined") module.exports = AV;
