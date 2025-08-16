import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './scss/style.scss';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

const app = createApp(App)

app
    .use(router)
    .use(PerfectScrollbarPlugin)
    .use(vuetify)
    .mount('#app')
