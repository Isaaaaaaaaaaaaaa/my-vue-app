import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// 导入Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 导入Bootstrap JS（可选，如果需要JavaScript功能）
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

app.use(router);

app.mount('#app');
