import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import lazuliUi from '/@lib/main';

createApp(App)
    .use(router)
    .use(lazuliUi)
    .mount('#app');
