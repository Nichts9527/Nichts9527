import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入learn-axios.ts文件
import './service/01_learn_axios-get'
// 全局引入Element Plus组件库
// import ElementPlus from 'element-plus'
// 全局引入Element Plus组件库样式
// import 'element-plus/dist/index.css'
// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
createApp(App).use(router).use(store).mount('#app')
