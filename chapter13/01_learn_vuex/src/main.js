import { createApp } from 'vue'
import App from './pages/12_module的命名空间.vue'
import store from './store/index.js'

createApp(App).use(store).mount('#app')
