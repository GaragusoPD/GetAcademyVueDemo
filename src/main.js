// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routes';
import '@assets/style.css'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
