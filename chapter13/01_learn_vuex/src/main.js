import { createApp } from 'vue'
import App from './pages/02_mapState_setup.vue'
import store from './store/index.js'

createApp(App).use(store).mount('#app')
