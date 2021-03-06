import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'LazuliUi'
        },
        rollupOptions: {
            external: [
                'vue',
                'phosphor-vue'
            ],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    'phosphor-vue': 'PhosphorVue'
                }
            }
        }
    }
});
