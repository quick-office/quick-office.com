import type { CollectionEntry } from 'astro:content';

import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    loader: glob({
        pattern: '**/index.{md,mdx}',
        base: 'src/content/blogs',
        generateId: ({ entry }) => entry.replace(/\/index\.(md|mdx)$/, ''),
    }),
    schema: ({ image: img }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            meta_title: z.string().optional(),
            date: z.coerce.date().optional(),
            draft: z.boolean().optional(),
            image: img().optional(),
            author: z.string().default('Admin'),
            author_image: z.string().optional(),
            categories: z.array(z.string()).default(() => ['others']),
            tags: z.array(z.string()).default(() => ['others']),
            tag: z.string().optional(),
            read_time: z.string().optional(),
        }),
});

export const collections = {
    blogs: blogCollection,
};

export type TBlog = CollectionEntry<'blogs'>['data'];
