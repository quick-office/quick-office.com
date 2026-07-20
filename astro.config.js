import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';
import sharp from 'sharp';

export default defineConfig({
    base: '/',
    site: 'https://quick-office.com',
    trailingSlash: 'never',
    image: {
        service: sharp(),
        dangerouslyProcessSVG: true,
    },
    markdown: {
        processor: unified(),
        remarkPlugins: [
            remarkToc,
            [
                remarkCollapse,
                {
                    test: 'Table of contents',
                },
            ],
        ],
        shikiConfig: {
            theme: 'one-dark-pro',
            wrap: true,
        },
    },
    integrations: [
        react(),
        sitemap(),
        mdx(),
        //
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: cloudflare({
        imageService: 'compile',
    }),
});
