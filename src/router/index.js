import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/alterMessage',
        name: 'alterMessage',
        component: () =>
            import ('../views/alterMessage.vue')
    },
    {
        path: '/showUserList.vue',
        name: 'showUserList',
        component: () =>
            import ('../views/showUserList.vue'),
    },
    {
        path: '/userInfo.vue',
        name: 'userInfo',
        component: () =>
            import ('../views/userInfo.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
})

export default router