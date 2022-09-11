/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom'
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'CookieWatcher',
            formats: ['es', 'umd'],
            fileName: (format) => `cookie-watcher.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
            },
        },
    },
});
