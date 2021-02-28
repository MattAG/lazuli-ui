import { defineAsyncComponent } from '@vue/runtime-core';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: defineAsyncComponent(() => import('../views/Home.vue'))
    },
    {
        name: 'Buttons',
        path: '/buttons',
        component: defineAsyncComponent(() => import('../views/Buttons.vue'))
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
