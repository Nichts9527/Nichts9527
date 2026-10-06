import { createApp } from 'vue'
import App from './App.vue'
// 导入Lodash模块
import lodash from 'lodash'

createApp(App).mount('#app')

// 使用全局变量
console.log(appName);//报错
console.log(appVersion);//报错

// 使用全局函数
console.log(getAppName());//ok

// 使用全局类
const p = new Person('why', 18);//ok
console.log(p);



