import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Design Systems for High-Velocity Teams",
  "excerpt": "Lessons from scaling a design-engineering system across 12 product squads without losing soul.",
  "date": "2023-12-10T00:00:00.000Z",
  "readingTime": "7 min",
  "tags": ["Design Systems", "Tooling", "Accessibility"],
  "coverImage": "/images/blog/design-systems-cover.jpg"
};
const { title, excerpt, date, readingTime, tags, coverImage } = metadata;
const Design_systems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-lcmscw">Design systems are not just component libraries—they are cultural agreements that let teams move faster without sacrificing craft.</p> <h2 data-svelte-h="svelte-epzets">Foundations</h2> <ul data-svelte-h="svelte-w9ehjo"><li><strong>Tokens first</strong> to unify spacing, typography, and motion semantically.</li> <li><strong>Accessibility baked in</strong> with linting pipelines and governance dashboards.</li> <li><strong>Composable documentation</strong> using MDX, Storybook, and interactive playgrounds.</li></ul> <h3 data-svelte-h="svelte-h2q47y">Governance Snapshot</h3> <pre class="language-json"><!-- HTML_TAG_START -->${`<code class="language-json"><span class="token punctuation">&#123;</span>
	<span class="token property">"component"</span><span class="token operator">:</span> <span class="token string">"Button"</span><span class="token punctuation">,</span>
	<span class="token property">"a11y"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"aria"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">"contrast"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">"focusRing"</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token property">"usage"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"productTeams"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
		<span class="token property">"marketingTeams"</span><span class="token operator">:</span> <span class="token number">3</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-c5mxlp">Enablement</h2> <ol data-svelte-h="svelte-jum51y"><li>Weekly crits to review patterns and exceptions.</li> <li>Async office hours for engineers to request component enhancements.</li> <li>Quarterly audits mapping design debt and measuring adoption.</li></ol> <p data-svelte-h="svelte-e45bwt">Systems thrive when they empower teams to bend rules responsibly, not when they enforce rigid templates.</p>`;
});
export {
  Design_systems as default,
  metadata
};
