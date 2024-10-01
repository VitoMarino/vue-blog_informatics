import { createApp } from 'vue';
import './style/general.scss';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import {router} from './router';

const app = createApp(App);


createApp(App).use(router).mount('#app');
