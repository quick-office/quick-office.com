import { unified } from '@astrojs/markdown-remark';
import { defineConfig, sharpImageService } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';

export default defineConfig({
    base: '/',
    site: 'https://quick-office.com',
    output: 'static',
    trailingSlash: 'never',
    image: {
        service: sharpImageService(),
        dangerouslyProcessSVG: true,
    },
    markdown: {
        processor: unified({
            remarkPlugins: [
                remarkToc,
                [
                    remarkCollapse,
                    {
                        test: 'Table of contents',
                    },
                ],
            ],
        }),
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
        plugins: [
            tailwindcss(),
            //
        ],
    },
});
