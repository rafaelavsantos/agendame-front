import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import pinia from './plugins/pinia';
import { createApp } from 'vue'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import { useMeStore } from './stores/me';
import './scss/style.scss';
import 'vue3-perfect-scrollbar/style.css';
import './plugins/yup';
import './plugins/axios';

const app = createApp(App);

app.use(pinia);

const meStore = useMeStore();

meStore.getMe().finally(() => {
    app
        .use(router)
        .use(PerfectScrollbarPlugin)
        .use(vuetify)
        .mount('#app')
});
