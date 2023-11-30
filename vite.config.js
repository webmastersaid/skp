import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '/index.html'),
                about: resolve(__dirname, '/about/index.html'),
            },
        },
        outDir: '../dist'
    },
})