import type { CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

export type Blog = CollectionEntry<'blogs'>['data'];

export interface FeatureItem {
    logo: ImageMetadata | string;
    title: string;
    is_starred: boolean;
}

export interface OurFeaturesSection {
    badge?: string;
    title: string;
    content?: string;
    items: FeatureItem[];
}
