declare module '*.astro' {
    import type { AstroComponentFactory } from 'astro/dist/runtime/server/render/astro/factory.js';
    const _default: AstroComponentFactory;
    export default _default;
}

declare module 'remark-collapse';
