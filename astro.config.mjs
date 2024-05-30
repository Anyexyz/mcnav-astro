import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
    base: '/nav',
    trailingSlash: "never",
    vite: {
        plugins: [yaml()]
    }
});