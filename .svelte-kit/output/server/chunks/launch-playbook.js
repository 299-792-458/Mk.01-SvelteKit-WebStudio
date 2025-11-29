import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Building a Cinematic Launch Playbook",
  "excerpt": "The Mk.01 framework for orchestrating motion, content, and engineering during high-stakes launches.",
  "date": "2024-01-22T00:00:00.000Z",
  "readingTime": "6 min",
  "tags": ["Launch", "Strategy", "Motion"],
  "coverImage": "/images/blog/launch-playbook-cover.jpg"
};
const { title, excerpt, date, readingTime, tags, coverImage } = metadata;
const Launch_playbook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-ev26yl">Launching is choreography. Every step—from early prototypes to final QA—must be intentional so the audience feels the magic without sensing the chaos behind the scenes.</p> <h2 data-svelte-h="svelte-1825snl">Pillars</h2> <ul data-svelte-h="svelte-1lsufgm"><li><strong>Narrative first</strong> — Align story arcs, voice, and CTA orchestration with business goals.</li> <li><strong>Motion as language</strong> — Document entrance timings, state changes, and progressive disclosure.</li> <li><strong>Resilience</strong> — Build fallback experiences and automate regression checks for every route.</li></ul> <h3 data-svelte-h="svelte-1ml8ij9">Motion Timeline</h3> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">const</span> heroReveal <span class="token operator">=</span> <span class="token function">timeline</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">[</span><span class="token string">'.hero-headline'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> opacity<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> duration<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> ease<span class="token operator">:</span> <span class="token string">'easeOutCubic'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>
		<span class="token string">'.hero-media'</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> scale<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.92</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> filter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'blur(12px)'</span><span class="token punctuation">,</span> <span class="token string">'blur(0px)'</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> at<span class="token operator">:</span> <span class="token string">'&lt;'</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token number">1.2</span> <span class="token punctuation">&#125;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-1amwu4c">QA Rituals</h2> <ol data-svelte-h="svelte-jg0vy4"><li>Automated visual regression with multiple theme snapshots.</li> <li>Performance budgets enforced via Lighthouse CI.</li> <li>Manual run-through with screen readers and reduced-motion settings.</li></ol> <p data-svelte-h="svelte-1kqxnwg">The deliverable? A reusable launch playbook that meets marketing, product, and engineering expectations while delighting users.</p>`;
});
export {
  Launch_playbook as default,
  metadata
};
