export default [
    {
        path: '/login',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        meta: {
            requiresAuth: false
        },
        children: [
            {
                name: 'login',
                path: '',
                component: () => import('@/pages/auth/Login.vue')
            },
            
        ]

    }, 
    {
        path: '/cadastrar',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        meta: {
            requiresAuth: false
        },
        children: [
            {
                name: 'register',
                path: '',
                component: () => import('@/pages/auth/Register.vue')
            },
        ]
        
    }
]