import { createApp } from 'vue'
import App from './06_nextTick的使用/App.vue'
import registerDirectives from './directives/index.js'
import pluginObiect from "./plugins/plugins_object.js"
import pluginFunction from"./plugins/plugins_function.js"
// import App from "./03_自定义指令/App.vue"
let app = createApp(App)
app.use(pluginFunction);//使用ap.use安转插件
// app.use(pluginObiect);//安转插件时会执行插件的install函数
// 自定义全局指令v-format-time
registerDirectives(app);
app.mount('#app');
// 自定义v-focus全局指令，该指令可以全局使用
// app.directive("focus", {
//     mounted(el, bindings) {
//         console.log("focus mounted");
//         el.focus();
//     }
// })

// createApp(App).mount('#app')
