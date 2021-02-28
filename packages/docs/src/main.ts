import lazuliUi from '@lazuli-ui/lib';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
    .use(router)
    .use(lazuliUi)
    .mount('#app');
