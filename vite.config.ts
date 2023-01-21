import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({ resolvers: [AntDesignVueResolver()] })],
  resolve: {
    // alias: [
    //   {find: '@/', replacement: '/src/'}
    // ]
    alias: {
      '@/': '/src/',
    }
  },
  server: {
    proxy: {
      "/api": {
        target: 'http://localhost:3000/', // 测试环境
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),

      }
    }
  }
});
