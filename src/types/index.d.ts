import type { CollectionEntry } from 'astro:content';

export type Blog = CollectionEntry<'blogs'>['data'];

export interface FeatureItem {
    logo: string;
    title: string;
    is_starred: boolean;
}
