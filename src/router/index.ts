import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component: ()=>import('@/layout/index.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    Nprogress.start();
    next();
})

router.afterEach((to, from) => {
    Nprogress.done();
})



export default router
