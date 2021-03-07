import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/lazuli-ui/',
    plugins: [vue()],
    resolve: {
        alias: {
            '/@': path.resolve(__dirname, 'src'),
            '/@lib': path.resolve(__dirname, '../lib/src')
        }
    },
    server: {
        open: true
    }
});
