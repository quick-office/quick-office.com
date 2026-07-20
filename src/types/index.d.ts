import type { CollectionEntry } from 'astro:content';

export type Blog = CollectionEntry<'blog'>['data'];

export interface FeatureItem {
    logo: string;
    title: string;
    is_starred: boolean;
}
