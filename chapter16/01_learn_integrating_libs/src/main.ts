import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入learn-axios.ts文件
import './service/01_learn-axios-get.js'
// 导入learn-axios-post.ts文件
import './service/03_learn-axios-post'
// 导入learn-axios-config.ts文件
import './service/04_learn-axios-config'
// 导入learn-axios-all.ts文件
import './service/05_learn-axios-all'
// 导入learn-axios=interceptors.ts文件
import './service/06_learn-axios-interceptors.js'
// 导入learn-axios-instance.ts文件
import './service/07_learn-axios-instance.js'
// 导入learn-hy-request.ts文件
import './service/08_learn-hy-request.js'
// 全局引入Element Plus组件库   
// import ElementPlus from 'element-plus'
// 全局引入Element Plus组件库样式
// import 'element-plus/dist/index.css'
// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
createApp(App).use(router).use(store).mount('#app')
