import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../pages/HomePage.vue"; //导入Home页面，也称路由组件或页面组件
// import AboutPage from "../pages/AboutPage.vue";
const routes = [
  //路由默认路径(/)，重定向到/home路径
  {
    path: "/",
    redirect: "/home",
  },
  //配置路由映射表（路径->组件）
  // 路由懒加载，加载HomePage和AboutPage组件
  {
    path: "/home",
    component: () =>
      import(/*webpackChunkName:"home-chunk"*/ "../pages/HomePage.vue"),
    children: [
      // 在home页面下注册二级路由
      {
        path:'',
        redirect:"/home/message",//访问/home路径时，重定向到/home/message路径
      },
      {
        path: "message",//二级路由不支持/message或/home/message,直接填message即可
        component: () =>import("../pages/HomeMessage.vue")
      },
      {
        path:"shops",
        component:()=>import("../pages/HomeShops.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about", //指定该路由的名称为about
    component: () =>
      import(/*webpackChunkName:"abput-chunk"*/ "../pages/HomePage.vue"),
    meta: {
      // 为该路由添加自定义数据
      name: "why",
      age: "18",
    },
  },
  //动态路径参数以冒号开始，例如，:username代表动态路径参数
  {
    path: "/user/:username/id/:id",
    component: () => import("../pages/UserPage.vue"),
  },
  {
    path: "/:patchMatch(.*)",//使用通配符*来匹配任意路径，通配符路由应放在最后
    component: () => import("../pages/NotFound.vue")
  },
];
const router = createRouter({
  //导出创建好的路由对象
  routes,
  // history: createWebHashHistory(), //指定用hash路由
  history: createWebHistory(), //指定用history路由
});

export default router;
