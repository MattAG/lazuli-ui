import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: () => import('/@/views/Home.vue')
    },
    {
        name: 'Buttons',
        path: '/buttons',
        component: () => import('/@/views/Buttons.vue')
    },
    {
        name: 'Accordion',
        path: '/accordion',
        component: () => import('/@/views/Accordion.vue')
    },
    {
        name: 'Toast',
        path: '/toast',
        component: () => import('/@/views/Toast.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { routes };

export default router;
