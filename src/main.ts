import '@/styles/main.scss';
import 'dotenv/config';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
const environment = import.meta.env;
environment.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE;
const app = createApp(App);
const i18n = createI18n({});
const pinia = createPinia();
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app');
