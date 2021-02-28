import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/lazuli-ui/',
    plugins: [vue()],
    resolve: {
        alias: {
            '@lazuli-ui/lib': path.resolve(__dirname, '../lib/src/main.ts')
        }
    },
    server: {
        open: true
    }
});
