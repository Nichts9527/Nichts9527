/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// src/env.d.ts 或 src/shims-vue.d.ts

// 声明所有的 .css 文件
declare module '*.css' {
  const css: string
  export default css
}

// 也可以专门针对 element-plus 声明
declare module 'element-plus/dist/index.css'
