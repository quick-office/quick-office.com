import cloudflare from '@astrojs/cloudflare';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import { defineConfig } from 'astro/config';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';
import sharp from 'sharp';
import config from './src/config/config.json';

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare({ imageService: 'compile' }),
    site: config.site.base_url ? config.site.base_url : 'http://examplesite.com',
    base: config.site.base_path ? config.site.base_path : '/',
    trailingSlash: config.site.trailing_slash ? 'always' : 'never',
    image: { service: sharp(), dangerouslyProcessSVG: true },
    vite: { plugins: [tailwindcss()] },
    integrations: [
        react(),
        sitemap(),
        AutoImport({
            imports: [
                '@/layouts/shortcodes/Button',
                '@/layouts/shortcodes/Accordion',
                '@/layouts/shortcodes/Notice',
                '@/layouts/shortcodes/Video',
                // "@/layouts/shortcodes/Youtube",
                '@/layouts/shortcodes/Tabs',
                '@/layouts/shortcodes/Tab',
            ],
        }),
        mdx(),
    ],
    markdown: {
        processor: unified(),
        remarkPlugins: [remarkToc, [remarkCollapse, { test: 'Table of contents' }]],
        shikiConfig: { theme: 'one-dark-pro', wrap: true },
    },
});
