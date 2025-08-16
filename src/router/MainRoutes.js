export default {
    path: '/',
    meta: {
        requiresAuth: true
    },
    component: () => import('../layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '',
            component: () => import('../pages/dashboard/index.vue')
        },
    ]
};
