import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import 'element-plus/dist/index.css'

import router from './router'

// pinia store
import pinia from "@/stores/index";
// element icons
import * as Icons from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// CSS common style sheet
import "@/assets/styles/common.scss";
// custom element css
import "@/assets/styles/element.scss";

// errorHandler
import errorHandler from "@/utils/errorHandler";

const app = createApp(App);

app.config.errorHandler = errorHandler;

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});


app.use(router).use(pinia).mount('#app')
