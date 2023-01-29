const router = [
        { path: '/', name: 'X_ConsultaCEP', component: () => import('../views/V_ConsultaCEP.vue') },
        { path: '/sobre', name: 'V_SobreDev', component: () => import('../views/V_SobreDev.vue') },
        { path: '/:catchAll(.*)*', name: 'V_NotFound', component: () => import('../views/V_NotFound.vue')}
    ]

export default router