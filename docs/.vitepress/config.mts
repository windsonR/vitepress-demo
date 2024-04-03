import { defineConfig } from 'vitepress'
import inspect from 'vite-plugin-inspect'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    plugins: [
      inspect()
    ]
  }
})
