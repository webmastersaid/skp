import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '/index.html'),
                about: resolve(__dirname, '/about/index.html'),
                tech: resolve(__dirname, '/tech/index.html'),
                tech_detail: resolve(__dirname, '/tech/detail.html'),
                products: resolve(__dirname, '/products/index.html'),
                news: resolve(__dirname, '/news/index.html'),
            },
        },
        outDir: '../dist'
    },
})