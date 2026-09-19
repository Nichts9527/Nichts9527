import { createApp } from 'vue'
import App from './pages/11_module的局部状态.vue'
import store from './store/index.js'

createApp(App).use(store).mount('#app')
