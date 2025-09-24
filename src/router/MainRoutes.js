import { auth } from './guards';

export default {
    path: '/',
    component: () => import('../layouts/full/FullLayout.vue'),
    beforeEnter: auth,
    children: [
        {
            name: 'dashboard',
            path: '/',
            component: () => import('../pages/dashboard/index.vue')
        },
    ]
};
