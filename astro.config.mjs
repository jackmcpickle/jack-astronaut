import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [solid(), tailwind()],
    output: 'server',
    adapter: cloudflare({
        runtime: 'local',
    }),
});
