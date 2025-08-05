import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 引入element-plus和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).mount('#app')
