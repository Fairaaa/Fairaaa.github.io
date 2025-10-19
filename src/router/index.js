import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage,
        },
    ],
});

export default router;