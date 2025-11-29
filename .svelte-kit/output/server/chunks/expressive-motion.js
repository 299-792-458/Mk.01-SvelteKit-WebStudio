import "clsx";
import { h as html } from "./html.js";
const metadata = {
  "title": "Expressive Motion Systems for the Modern Web",
  "excerpt": "Designing motion languages that scale across pages, devices, and levels of immersion.",
  "date": "2024-02-19T00:00:00.000Z",
  "readingTime": "8 min",
  "tags": ["Motion", "Systems Design", "SvelteKit"],
  "coverImage": "/images/blog/expressive-motion-cover.jpg"
};
const { title, excerpt, date, readingTime, tags, coverImage } = metadata;
function Expressive_motion_mdx($$renderer) {
  $$renderer.push(`<lead>Motion is the connective tissue between intention and interaction. When used with care it
	transcends decoration and becomes guidance, storytelling, and delight.</lead> <p>We approach motion like we approach typography: as a system. It requires scales, tokens, choreography guidelines, and tooling that makes the right move the default move.</p> <p><wide-image src="/images/blog/motion-curve.jpg" alt="Motion curve explorations"></wide-image></p> <h2>Building a Motion Spec</h2> <ol><li><strong>Define the palette</strong> – duration, easing, choreography principles.</li> <li><strong>Prototype in isolation</strong> – each motion preset lives inside a Storybook canvas for rapid QA.</li> <li><strong>Instrument everything</strong> – motion events trigger analytics pings to understand sentiment.</li></ol> <blockquote><p><em>“We don’t animate to show off. We animate to reveal intent.”</em> — Studio Motion Manifesto</p></blockquote> <h2>Interaction Modes</h2> <ul><li><strong>Cinematic</strong> for large screen hero experiences.</li> <li><strong>Tactile</strong> for product UI and micro interactions.</li> <li><strong>Ambient</strong> for background loops that set tone.</li></ul> <h3>Toolkit</h3> <pre class="language-ts">${html(`<code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> timeline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'motion'</span><span class="token punctuation">;</span>

<span class="token function">timeline</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">[</span><span class="token string">'.hero-headline'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> opacity<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> duration<span class="token operator">:</span> <span class="token number">0.8</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>
		<span class="token string">'.hero-orbs'</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> scale<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> filter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'blur(12px)'</span><span class="token punctuation">,</span> <span class="token string">'blur(0px)'</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> at<span class="token operator">:</span> <span class="token string">'&lt;'</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token number">1.6</span> <span class="token punctuation">&#125;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`)}</pre> <p>In the final stage we stress test for reduced motion and extreme viewport widths, ensuring accessibility never takes a back seat to aesthetics.</p>`);
}
export {
  Expressive_motion_mdx as default,
  metadata
};
