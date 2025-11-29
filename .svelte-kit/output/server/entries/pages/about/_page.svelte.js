import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../../chunks/ssr.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
const css$1 = {
  code: ".constellation.svelte-1cei8n9.svelte-1cei8n9{display:grid;gap:1.6rem;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr))}.card.svelte-1cei8n9.svelte-1cei8n9{position:relative;transform:rotate(var(--rotate));border-radius:1.5rem;padding:1.4rem;background:radial-gradient(120% 120% at 10% 0%, rgba(255, 107, 203, 0.18), transparent 65%),\n			radial-gradient(140% 120% at 100% 100%, rgba(47, 93, 255, 0.2), rgba(9, 13, 31, 0.82));border:1px solid rgba(255, 255, 255, 0.08);box-shadow:0 24px 40px rgba(9, 13, 31, 0.38);backdrop-filter:blur(18px);display:grid;gap:1rem;color:rgba(226, 232, 255, 0.92)}.avatar.svelte-1cei8n9.svelte-1cei8n9{width:4.5rem;height:4.5rem;border-radius:999px;overflow:hidden;border:2px solid rgba(255, 255, 255, 0.2);box-shadow:0 10px 24px rgba(5, 11, 35, 0.35)}img.svelte-1cei8n9.svelte-1cei8n9{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}header.svelte-1cei8n9 h3.svelte-1cei8n9{font-size:1.2rem;font-weight:600}header.svelte-1cei8n9 p.svelte-1cei8n9{font-size:0.85rem;color:rgba(226, 232, 255, 0.65)}.meta.svelte-1cei8n9.svelte-1cei8n9{margin-top:0.6rem;display:grid;gap:0.3rem;font-size:0.8rem;letter-spacing:0.04em;text-transform:uppercase;color:rgba(226, 232, 255, 0.55)}",
  map: `{"version":3,"file":"TeamConstellation.svelte","sources":["TeamConstellation.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let members = [];\\n<\/script>\\n\\n<section class=\\"constellation\\">\\n\\t{#each members as member, index}\\n\\t\\t<article class=\\"card\\" style={\`--rotate: \${index % 2 === 0 ? '-3deg' : '2.5deg'}\`}>\\n\\t\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t\\t<img src={member.avatar} alt={member.name} loading=\\"lazy\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"body\\">\\n\\t\\t\\t\\t<header>\\n\\t\\t\\t\\t\\t<h3>{member.name}</h3>\\n\\t\\t\\t\\t\\t<p>{member.title}</p>\\n\\t\\t\\t\\t</header>\\n\\t\\t\\t\\t<ul class=\\"meta\\">\\n\\t\\t\\t\\t\\t<li>{member.location}</li>\\n\\t\\t\\t\\t\\t<li>{member.specialties.join(' · ')}</li>\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</div>\\n\\t\\t</article>\\n\\t{/each}\\n</section>\\n\\n<style>\\n\\t.constellation {\\n\\t\\tdisplay: grid;\\n\\t\\tgap: 1.6rem;\\n\\t\\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\\n\\t}\\n\\n\\t.card {\\n\\t\\tposition: relative;\\n\\t\\ttransform: rotate(var(--rotate));\\n\\t\\tborder-radius: 1.5rem;\\n\\t\\tpadding: 1.4rem;\\n\\t\\tbackground:\\n\\t\\t\\tradial-gradient(120% 120% at 10% 0%, rgba(255, 107, 203, 0.18), transparent 65%),\\n\\t\\t\\tradial-gradient(140% 120% at 100% 100%, rgba(47, 93, 255, 0.2), rgba(9, 13, 31, 0.82));\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.08);\\n\\t\\tbox-shadow: 0 24px 40px rgba(9, 13, 31, 0.38);\\n\\t\\tbackdrop-filter: blur(18px);\\n\\t\\tdisplay: grid;\\n\\t\\tgap: 1rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.92);\\n\\t}\\n\\n\\t.avatar {\\n\\t\\twidth: 4.5rem;\\n\\t\\theight: 4.5rem;\\n\\t\\tborder-radius: 999px;\\n\\t\\toverflow: hidden;\\n\\t\\tborder: 2px solid rgba(255, 255, 255, 0.2);\\n\\t\\tbox-shadow: 0 10px 24px rgba(5, 11, 35, 0.35);\\n\\t}\\n\\n\\timg {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\t-o-object-fit: cover;\\n\\t\\t   object-fit: cover;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\theader h3 {\\n\\t\\tfont-size: 1.2rem;\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\theader p {\\n\\t\\tfont-size: 0.85rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.65);\\n\\t}\\n\\n\\t.meta {\\n\\t\\tmargin-top: 0.6rem;\\n\\t\\tdisplay: grid;\\n\\t\\tgap: 0.3rem;\\n\\t\\tfont-size: 0.8rem;\\n\\t\\tletter-spacing: 0.04em;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tcolor: rgba(226, 232, 255, 0.55);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,4CAAe,CACd,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,MAAM,CACX,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAC3D,CAEA,mCAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,IAAI,QAAQ,CAAC,CAAC,CAChC,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,MAAM,CACf,UAAU,CACT,gBAAgB,IAAI,CAAC,IAAI,CAAC,EAAE,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC;AACnF,GAAG,gBAAgB,IAAI,CAAC,IAAI,CAAC,EAAE,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CACvF,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAC7C,eAAe,CAAE,KAAK,IAAI,CAAC,CAC3B,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAChC,CAEA,qCAAQ,CACP,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,aAAa,CAAE,KAAK,CACpB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAC7C,CAEA,iCAAI,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,OAAO,CAAE,KACV,CAEA,qBAAM,CAAC,iBAAG,CACT,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACd,CAEA,qBAAM,CAAC,gBAAE,CACR,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAChC,CAEA,mCAAM,CACL,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,MAAM,CACX,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,MAAM,CACtB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAChC"}`
};
const TeamConstellation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { members = [] } = $$props;
  if ($$props.members === void 0 && $$bindings.members && members !== void 0) $$bindings.members(members);
  $$result.css.add(css$1);
  return `<section class="constellation svelte-1cei8n9">${each(members, (member, index) => {
    return `<article class="card svelte-1cei8n9"${add_attribute("style", `--rotate: ${index % 2 === 0 ? "-3deg" : "2.5deg"}`, 0)}><div class="avatar svelte-1cei8n9"><img${add_attribute("src", member.avatar, 0)}${add_attribute("alt", member.name, 0)} loading="lazy" class="svelte-1cei8n9"></div> <div class="body"><header class="svelte-1cei8n9"><h3 class="svelte-1cei8n9">${escape(member.name)}</h3> <p class="svelte-1cei8n9">${escape(member.title)}</p></header> <ul class="meta svelte-1cei8n9"><li>${escape(member.location)}</li> <li>${escape(member.specialties.join(" · "))}</li> </ul></div> </article>`;
  })} </section>`;
});
const css = {
  code: ".timeline.svelte-1gkr2sh.svelte-1gkr2sh{display:grid;gap:1.75rem;position:relative;padding-left:1.5rem}.timeline.svelte-1gkr2sh.svelte-1gkr2sh::before{content:'';position:absolute;left:0.6rem;top:0.3rem;bottom:0.3rem;width:2px;background:linear-gradient(180deg, rgba(47, 93, 255, 0.35), rgba(255, 107, 203, 0.35))}.timeline-item.svelte-1gkr2sh.svelte-1gkr2sh{display:grid;grid-template-columns:auto 1fr;gap:1.2rem;align-items:start}.marker.svelte-1gkr2sh.svelte-1gkr2sh{position:relative;width:1.4rem;height:1.4rem;display:grid;place-items:center}.marker.svelte-1gkr2sh span.svelte-1gkr2sh:first-child{width:0.4rem;height:0.4rem;border-radius:999px;background:rgba(47, 93, 255, 0.9)}.marker.svelte-1gkr2sh span.svelte-1gkr2sh:last-child{position:absolute;inset:0;border-radius:999px;border:2px solid rgba(47, 93, 255, 0.4);animation:svelte-1gkr2sh-pulse 2.8s ease-in-out infinite}.body.svelte-1gkr2sh.svelte-1gkr2sh{padding:1rem 1.2rem;border-radius:1.1rem;background:rgba(9, 13, 31, 0.55);border:1px solid rgba(255, 255, 255, 0.08);color:rgba(226, 232, 255, 0.9);backdrop-filter:blur(12px);box-shadow:0 12px 24px rgba(5, 11, 30, 0.28)}.year.svelte-1gkr2sh.svelte-1gkr2sh{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.28em;color:rgba(226, 232, 255, 0.6);margin-bottom:0.3rem}h3.svelte-1gkr2sh.svelte-1gkr2sh{font-size:1.2rem;font-weight:600;margin-bottom:0.4rem}.description.svelte-1gkr2sh.svelte-1gkr2sh{font-size:0.95rem;color:rgba(226, 232, 255, 0.72);line-height:1.6}@keyframes svelte-1gkr2sh-pulse{0%{transform:scale(0.85);opacity:0.9}100%{transform:scale(1.4);opacity:0}}",
  map: `{"version":3,"file":"Timeline.svelte","sources":["Timeline.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let items = [];\\n<\/script>\\n\\n<ol class=\\"timeline\\">\\n\\t{#each items as item}\\n\\t\\t<li class=\\"timeline-item\\">\\n\\t\\t\\t<div class=\\"marker\\" aria-hidden=\\"true\\">\\n\\t\\t\\t\\t<span />\\n\\t\\t\\t\\t<span />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"body\\">\\n\\t\\t\\t\\t<p class=\\"year\\">{item.year}</p>\\n\\t\\t\\t\\t<h3>{item.title}</h3>\\n\\t\\t\\t\\t<p class=\\"description\\">{item.description}</p>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\n\\t{/each}\\n</ol>\\n\\n<style>\\n\\t.timeline {\\n\\t\\tdisplay: grid;\\n\\t\\tgap: 1.75rem;\\n\\t\\tposition: relative;\\n\\t\\tpadding-left: 1.5rem;\\n\\t}\\n\\n\\t.timeline::before {\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0.6rem;\\n\\t\\ttop: 0.3rem;\\n\\t\\tbottom: 0.3rem;\\n\\t\\twidth: 2px;\\n\\t\\tbackground: linear-gradient(180deg, rgba(47, 93, 255, 0.35), rgba(255, 107, 203, 0.35));\\n\\t}\\n\\n\\t.timeline-item {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: auto 1fr;\\n\\t\\tgap: 1.2rem;\\n\\t\\talign-items: start;\\n\\t}\\n\\n\\t.marker {\\n\\t\\tposition: relative;\\n\\t\\twidth: 1.4rem;\\n\\t\\theight: 1.4rem;\\n\\t\\tdisplay: grid;\\n\\t\\tplace-items: center;\\n\\t}\\n\\n\\t.marker span:first-child {\\n\\t\\twidth: 0.4rem;\\n\\t\\theight: 0.4rem;\\n\\t\\tborder-radius: 999px;\\n\\t\\tbackground: rgba(47, 93, 255, 0.9);\\n\\t}\\n\\n\\t.marker span:last-child {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0;\\n\\t\\tborder-radius: 999px;\\n\\t\\tborder: 2px solid rgba(47, 93, 255, 0.4);\\n\\t\\tanimation: pulse 2.8s ease-in-out infinite;\\n\\t}\\n\\n\\t.body {\\n\\t\\tpadding: 1rem 1.2rem;\\n\\t\\tborder-radius: 1.1rem;\\n\\t\\tbackground: rgba(9, 13, 31, 0.55);\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.08);\\n\\t\\tcolor: rgba(226, 232, 255, 0.9);\\n\\t\\tbackdrop-filter: blur(12px);\\n\\t\\tbox-shadow: 0 12px 24px rgba(5, 11, 30, 0.28);\\n\\t}\\n\\n\\t.year {\\n\\t\\tfont-size: 0.75rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 0.28em;\\n\\t\\tcolor: rgba(226, 232, 255, 0.6);\\n\\t\\tmargin-bottom: 0.3rem;\\n\\t}\\n\\n\\th3 {\\n\\t\\tfont-size: 1.2rem;\\n\\t\\tfont-weight: 600;\\n\\t\\tmargin-bottom: 0.4rem;\\n\\t}\\n\\n\\t.description {\\n\\t\\tfont-size: 0.95rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.72);\\n\\t\\tline-height: 1.6;\\n\\t}\\n\\n\\t@keyframes pulse {\\n\\t\\t0% {\\n\\t\\t\\ttransform: scale(0.85);\\n\\t\\t\\topacity: 0.9;\\n\\t\\t}\\n\\n\\t\\t100% {\\n\\t\\t\\ttransform: scale(1.4);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,uCAAU,CACT,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,OAAO,CACZ,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,MACf,CAEA,uCAAS,QAAS,CACjB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,MAAM,CACZ,GAAG,CAAE,MAAM,CACX,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACvF,CAEA,4CAAe,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,GAAG,CAC/B,GAAG,CAAE,MAAM,CACX,WAAW,CAAE,KACd,CAEA,qCAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACd,CAEA,sBAAO,CAAC,mBAAI,YAAa,CACxB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,aAAa,CAAE,KAAK,CACpB,UAAU,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAClC,CAEA,sBAAO,CAAC,mBAAI,WAAY,CACvB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACxC,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,WAAW,CAAC,QACnC,CAEA,mCAAM,CACL,OAAO,CAAE,IAAI,CAAC,MAAM,CACpB,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CACjC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/B,eAAe,CAAE,KAAK,IAAI,CAAC,CAC3B,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAC7C,CAEA,mCAAM,CACL,SAAS,CAAE,OAAO,CAClB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/B,aAAa,CAAE,MAChB,CAEA,gCAAG,CACF,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,MAChB,CAEA,0CAAa,CACZ,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChC,WAAW,CAAE,GACd,CAEA,WAAW,oBAAM,CAChB,EAAG,CACF,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,OAAO,CAAE,GACV,CAEA,IAAK,CACJ,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,CACV,CACD"}`
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  $$result.css.add(css);
  return `<ol class="timeline svelte-1gkr2sh">${each(items, (item) => {
    return `<li class="timeline-item svelte-1gkr2sh"><div class="marker svelte-1gkr2sh" aria-hidden="true" data-svelte-h="svelte-1v7nojr"><span class="svelte-1gkr2sh"></span> <span class="svelte-1gkr2sh"></span></div> <div class="body svelte-1gkr2sh"><p class="year svelte-1gkr2sh">${escape(item.year)}</p> <h3 class="svelte-1gkr2sh">${escape(item.title)}</h3> <p class="description svelte-1gkr2sh">${escape(item.description)}</p></div> </li>`;
  })} </ol>`;
});
const team = [
  {
    name: "이준호",
    title: "Founder · Creative Technologist",
    avatar: "/images/team/junho.jpg",
    location: "Seoul, KR",
    specialties: ["Experience Engineering", "3D Web", "Motion Systems"]
  },
  {
    name: "Mira Park",
    title: "Design Director",
    avatar: "/images/team/mira.jpg",
    location: "Busan, KR",
    specialties: ["Narrative UX", "Design Systems", "Accessibility"]
  },
  {
    name: "Ethan Cho",
    title: "Head of Labs",
    avatar: "/images/team/ethan.jpg",
    location: "Tokyo, JP",
    specialties: ["Creative R&D", "Realtime Collaboration", "AI Prototyping"]
  },
  {
    name: "Sara Min",
    title: "Lead Product Engineer",
    avatar: "/images/team/sara.jpg",
    location: "Seoul, KR",
    specialties: ["Svelte Architecture", "Edge Compute", "Tooling"]
  }
];
const studioTimeline = [
  {
    year: "2020",
    title: "Mk.01 Origins",
    description: "Launched as a solo craft, shipping experimental Svelte prototypes that gained global attention."
  },
  {
    year: "2021",
    title: "Studio Expansion",
    description: "Scaled into a multi-disciplinary collective delivering launches for entertainment & fintech brands."
  },
  {
    year: "2022",
    title: "Labs Initiative",
    description: "Opened Mk.01 Labs—an R&D playground exploring AI, WebGL, and experiential storytelling."
  },
  {
    year: "2023",
    title: "Systems Era",
    description: "Rolled out modular design systems across enterprise partners; introduced the Mk.01 component library."
  },
  {
    year: "2024",
    title: "Global Recognitions",
    description: "Honored with Awwwards recognitions, speaking engagements, and expanded our distributed partner network."
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const values = [
    {
      title: "Clarity over noise",
      description: "Every engagement starts with strategy sprints that align goals, audiences, and measures of success before pencils touch pixels."
    },
    {
      title: "Play with purpose",
      description: "Exploration fuels the work. WebGL, AI, and immersive storytelling become tools to reveal opportunity—not distractions."
    },
    {
      title: "Radical inclusivity",
      description: "Accessibility, localization, performance, and governance live in the definition of done. Beauty and responsibility coexist."
    }
  ];
  const rituals = [
    {
      title: "Discovery immersion",
      detail: "Stakeholder interviews, ecosystem mapping, and live sketching to establish a shared product vocabulary."
    },
    {
      title: "Narrative choreography",
      detail: "Story-driven flows that connect concept, copy, and motion so every interaction feels intentional."
    },
    {
      title: "Launch orchestration",
      detail: "Playbook for go-live: documentation, design tokens, QA suites, and motion specs ready for handoff."
    }
  ];
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "about-hero",
      tone: "contrast",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="grid gap-12 lg:grid-cols-[1.35fr_minmax(0,1fr)] lg:items-end" data-svelte-h="svelte-12qoth8"><div class="space-y-6"><span class="eyebrow text-secondary/80">About Mk.01</span> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">A Seoul-born studio crafting immersive product stories and fearless web experiments.</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">Founded by Korea’s #3 ranked creative technologist, Mk.01 blends narrative design, motion
				systems, and engineering discipline to launch experiences that feel cinematic and ship with
				rigor.</p> <div class="flex flex-wrap gap-3"><a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Start a conversation</a> <a href="/stack" class="btn btn-outline btn-lg">View the stack</a></div></div> <div class="surface-panel space-y-4 bg-base-100/80"><h2 class="text-lg font-semibold text-base-content">Studio DNA</h2> <ul class="space-y-3 text-sm text-base-content/70"><li class="flex items-start gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>Distributed team across Seoul, Busan, Tokyo, and global collaborators.</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>Launch runway playbook covering pre-visualization, motion specs, and QA rituals.</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>Labs program shipping open-source experiments and R&amp;D prototypes quarterly.</span></li></ul></div></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "values" }, {}, {
    default: () => {
      return `<div class="mx-auto max-w-3xl text-center space-y-4" data-svelte-h="svelte-13xlqej"><span class="eyebrow text-primary/80">Practice values</span> <h2 class="text-3xl font-semibold sm:text-4xl">Principles that anchor every build.</h2> <p class="text-base text-base-content/70 sm:text-lg">We pursue expressive experiences without sacrificing performance, accessibility, or long-term
			maintainability.</p></div> <div class="grid gap-6 lg:grid-cols-3">${each(values, (value) => {
        return `<div class="surface-card h-full text-left"><h3 class="text-xl font-semibold">${escape(value.title)}</h3> <p class="mt-3 text-sm text-base-content/70">${escape(value.description)}</p> </div>`;
      })}</div>`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "team", tone: "subtle" }, {}, {
    default: () => {
      return `<div class="space-y-6" data-svelte-h="svelte-lwycrg"><span class="eyebrow text-secondary/80">Team constellation</span> <h2 class="text-3xl font-semibold sm:text-4xl">A collective of strategists, artists, and engineers.</h2></div> ${validate_component(TeamConstellation, "TeamConstellation").$$render($$result, { members: team }, {}, {})}`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "rituals" }, {}, {
    default: () => {
      return `<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"><div class="space-y-4" data-svelte-h="svelte-1wa5io7"><span class="eyebrow text-primary/80">Studio rituals</span> <h2 class="text-3xl font-semibold sm:text-4xl">Designing momentum from first call to launch day.</h2> <p class="text-base text-base-content/70 sm:text-lg">Collaboration cadences are engineered to keep vision, craft, and execution in harmony. From
				early discovery to the final deploy, every ritual is choreographed for clarity and magic.</p></div> <div class="space-y-4">${each(rituals, (ritual) => {
        return `<div class="rounded-2xl border border-base-200/70 bg-base-100/70 p-6 shadow-lg backdrop-blur"><h3 class="text-lg font-semibold text-base-content">${escape(ritual.title)}</h3> <p class="mt-2 text-sm text-base-content/70">${escape(ritual.detail)}</p> </div>`;
      })}</div></div>`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "timeline", tone: "contrast" }, {}, {
    default: () => {
      return `<div class="space-y-6" data-svelte-h="svelte-1yk3ak3"><span class="eyebrow text-secondary/80">Trajectory</span> <h2 class="text-3xl font-semibold sm:text-4xl">From solo experiments to a studio powering global launches.</h2></div> ${validate_component(Timeline, "Timeline").$$render($$result, { items: studioTimeline }, {}, {})}`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "collaboration-pitch",
      tone: "contrast",
      padding: "compact"
    },
    {},
    {
      default: () => {
        return `<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center" data-svelte-h="svelte-10hwx90"><h2 class="text-3xl font-semibold sm:text-4xl">Let’s co-create your next chapter.</h2> <p class="mt-4 text-base text-base-content/70 sm:text-lg">Whether you need an embedded product squad, a cinematic launch experience, or R&amp;D
			explorations, Mk.01 is ready to collaborate.</p> <div class="mt-6 flex flex-wrap justify-center gap-3"><a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Share your brief</a> <a href="/labs" class="btn btn-ghost btn-lg">Tour the labs</a></div></div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
