import {createRouter, createWebHistory} from 'vue-router';

// Homepage collegata ai componenti generali
import PageHomePage from './pages/PageHomepage.vue';

// Pages
import PagePC from './pages/PagePC.vue';
import PageSmartphone from './pages/PageSmartphone.vue';
import PageTablet from './pages/PageTablet.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: PageHomePage
        },
        {
            path: '/PC',
            name: 'PC',
            component: PagePC
        },
        {
            path: '/smartphone',
            name: 'Smartphone',
            component: PageSmartphone
        },
        {
            path: '/tablet',
            name: 'Tablet',
            component: PageTablet
        },
    ]
});

export {router};