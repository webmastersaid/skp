import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '/index.html'),
                about: resolve(__dirname, '/about/index.html'),
                news: resolve(__dirname, '/news/index.html'),
            },
        },
        outDir: '../dist'
    },
})