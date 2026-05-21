import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function githubPagesBase() {
    if (process.env.GITHUB_PAGES !== 'true') {
        return undefined;
    }

    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];

    return repo ? `/${repo}/` : '/';
}

export default defineConfig({
    base: githubPagesBase(),
    define: {
        'import.meta.env.VITE_GITHUB_PAGES': JSON.stringify(
            process.env.GITHUB_PAGES === 'true' ? 'true' : 'false',
        ),
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
