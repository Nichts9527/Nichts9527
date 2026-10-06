import { createRouter, createWebHashHistory } from 'vue-router';
// 纯类型的导入，即从vue-router包的vue-router.d.ts文件中导入
import type { RouteRecordRaw, Router } from 'vue-router';

// 1. 声明routes的类型
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/about',
        component: () => import('../pages/About.vue')
    },
];
// 声明router的类型
const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;