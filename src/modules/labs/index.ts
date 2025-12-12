import { getExperiment } from '$content';

export interface LabExperiment {
	slug: string;
	title: string;
	summary: string;
	status: 'prototype' | 'production' | 'archived';
	thumbnail: string;
	tech: string[];
	highlight: string;
	accent?: string;
	links: {
		demo?: string;
		source?: string;
	};
}

export const labExperiments: LabExperiment[] = [
	{
		slug: 'sonic-orbit',
		title: 'Sonic Orbit',
		summary: 'Audio-reactive particle choreography rendered via instanced WebGL.',
		status: 'prototype',
		thumbnail: '/images/labs/sonic-orbit.jpg',
		tech: ['Three.js', 'WebAudio API', 'GPU Instancing'],
		highlight: 'Transforms ambient soundscapes into orbital constellations.',
		accent: '#7cf7ff',
		links: getExperiment('sonic-orbit')?.links ?? {}
	},
	{
		slug: 'holo-cascade',
		title: 'Holo Cascade',
		summary: 'Volumetric hero system combining shader-driven atmospherics with scroll control.',
		status: 'prototype',
		thumbnail: '/images/labs/holo-cascade.jpg',
		tech: ['SvelteKit', 'GLSL', 'GSAP'],
		highlight: 'Breathes life into hero sections with liquid light transitions.',
		accent: '#ff6bcb',
		links: getExperiment('holo-cascade')?.links ?? {}
	},
	{
		slug: 'glyph-suite',
		title: 'Glyph Suite',
		summary: 'Parametric typography generator mapping sound + cursor data into living wordmarks.',
		status: 'production',
		thumbnail: '/images/labs/glyph-suite.jpg',
		tech: ['Canvas API', 'Tone.js', 'Workers'],
		highlight: 'Ships as a micro-SaaS companion for creative teams.',
		accent: '#7cf7ff',
		links: getExperiment('glyph-suite')?.links ?? {}
	},
	{
		slug: 'sense-grid',
		title: 'Sense Grid',
		summary: 'Multiplayer grid narrative using CRDTs for collaborative story weaving.',
		status: 'prototype',
		thumbnail: '/images/labs/sense-grid.jpg',
		tech: ['Yjs', 'WebRTC', 'Svelte'],
		highlight: 'Explores real-time narrative engines inside the browser.',
		accent: '#5a9bff',
		links: getExperiment('sense-grid')?.links ?? {}
	},
	{
		slug: 'quantum-docs',
		title: 'Quantum Docs',
		summary: 'Documentation engine with AI-assisted examples and interactive sandboxes.',
		status: 'production',
		thumbnail: '/images/labs/quantum-docs.jpg',
		tech: ['OpenAI API', 'mdsvex', 'Cloudflare Workers'],
		highlight: 'Currently powers internal handbooks and public case studies.',
		accent: '#0ea5e9',
		links: getExperiment('quantum-docs')?.links ?? {}
	},
	{
		slug: 'flicker-field',
		title: 'Flicker Field',
		summary: 'Neural style transfer applied to video textures for art-driven storytelling.',
		status: 'archived',
		thumbnail: '/images/labs/flicker-field.jpg',
		tech: ['TensorFlow.js', 'WebGL', 'ffmpeg.wasm'],
		highlight: 'Archived after shipping learnings into client R&D projects.',
		accent: '#f97316',
		links: getExperiment('flicker-field')?.links ?? {}
	}
];
