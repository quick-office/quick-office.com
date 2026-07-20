import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection, image } from 'astro:content';

const commonFields = {
    title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional(),
};

const blogCollection = defineCollection({
    loader: glob({
        pattern: '**/index.{md,mdx}',
        base: 'src/content/blogs',
        generateId: ({ entry }) => entry.replace(/\/index\.(md|mdx)$/, ''),
    }),
    schema: ({ image: img }) =>
        z.object({
            ...commonFields,
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
