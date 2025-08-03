// 引入 createRouter（创建路由实例）和 createWebHistory（使用HTML5模式的路由）
import { createRouter,createWebHistory } from 'vue-router'
// 引入两个页面组件，分别对应不同的路径
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// 定义路由表，每个对象代表一条路由规则
const routes = [
    {
        path: '/',
        component: Login,
        name: 'Login',
    },
    {
        path: '/TodoPage',
        component: Todo,
        name: 'TodoPage',
    }
]
const router = createRouter({
    history: createWebHistory(),// 使用 HTML5 的历史模式（地址栏不带 #）
    routes,// 使用上面定义的路由表
})
// 导出路由实例，在 main.js 中引入并使用
export default router