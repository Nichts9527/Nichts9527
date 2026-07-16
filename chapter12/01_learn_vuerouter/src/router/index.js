import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue"; //导入Home页面，也称路由组件或页面组件
import AboutPage from "../pages/AboutPage.vue";
const routes = [
  //配置路由映射表（路径->组件）
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];
const router = createRouter({
  //导出创建好的路由对象
  routes,
  history: createWebHashHistory(), //指定用hash路由
  //history:createWebHistory()//指定用history路由
});

export default router;
