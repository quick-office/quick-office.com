import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const commonFields = {
    title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
};

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/blog' }),
    schema: z.object({
        ...commonFields,
        author: z.string().default('Admin'),
        author_image: z.string().optional(),
        categories: z.array(z.string()).default(() => ['others']),
        tags: z.array(z.string()).default(() => ['others']),
        tag: z.string().optional(),
        read_time: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
