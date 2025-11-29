import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Expressive Motion Systems for the Modern Web",
  "excerpt": "Designing motion languages that scale across pages, devices, and levels of immersion.",
  "date": "2024-02-19T00:00:00.000Z",
  "readingTime": "8 min",
  "tags": ["Motion", "Systems Design", "SvelteKit"],
  "coverImage": "/images/blog/expressive-motion-cover.jpg"
};
const { title, excerpt, date, readingTime, tags, coverImage } = metadata;
const Expressive_motion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<lead data-svelte-h="svelte-18mui5m">Motion is the connective tissue between intention and interaction. When used with care it
	transcends decoration and becomes guidance, storytelling, and delight.</lead> <p data-svelte-h="svelte-1ru242e">We approach motion like we approach typography: as a system. It requires scales, tokens, choreography guidelines, and tooling that makes the right move the default move.</p> <wide-image src="/images/blog/motion-curve.jpg" alt="Motion curve explorations"></wide-image> <h2 data-svelte-h="svelte-wb90l0">Building a Motion Spec</h2> <ol data-svelte-h="svelte-d4oo5l"><li><strong>Define the palette</strong> – duration, easing, choreography principles.</li> <li><strong>Prototype in isolation</strong> – each motion preset lives inside a Storybook canvas for rapid QA.</li> <li><strong>Instrument everything</strong> – motion events trigger analytics pings to understand sentiment.</li></ol> <blockquote data-svelte-h="svelte-1wuzo5y"><p><em>“We don’t animate to show off. We animate to reveal intent.”</em> — Studio Motion Manifesto</p></blockquote> <h2 data-svelte-h="svelte-14qha7a">Interaction Modes</h2> <ul data-svelte-h="svelte-ug045v"><li><strong>Cinematic</strong> for large screen hero experiences.</li> <li><strong>Tactile</strong> for product UI and micro interactions.</li> <li><strong>Ambient</strong> for background loops that set tone.</li></ul> <h3 data-svelte-h="svelte-ot4c0k">Toolkit</h3> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> timeline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'motion'</span><span class="token punctuation">;</span>

<span class="token function">timeline</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">[</span><span class="token string">'.hero-headline'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> opacity<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> duration<span class="token operator">:</span> <span class="token number">0.8</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>
		<span class="token string">'.hero-orbs'</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> scale<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> filter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'blur(12px)'</span><span class="token punctuation">,</span> <span class="token string">'blur(0px)'</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> at<span class="token operator">:</span> <span class="token string">'&lt;'</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token number">1.6</span> <span class="token punctuation">&#125;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-rddqpl">In the final stage we stress test for reduced motion and extreme viewport widths, ensuring accessibility never takes a back seat to aesthetics.</p>`;
});
export {
  Expressive_motion as default,
  metadata
};
