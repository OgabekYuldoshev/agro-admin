import { lazy } from "react"

const routes = [
    {
        path: '/',
        component: lazy(() => import('../../pages/main')),
        exact: true
    },
    {
        path: '/category',
        component: lazy(() => import('../../pages/category')),
        exact: true
    },
    {
        path: '/products',
        component: lazy(() => import('../../pages/products')),
        exact: true
    },
    {
        path: '/partners',
        component: lazy(() => import('../../pages/partners')),
        exact: true
    },
    {
        path: '/currencies',
        component: lazy(() => import('../../pages/currencies')),
        exact: true
    },
    {
        path: '/login',
        component: lazy(() => import('../../pages/login')),
        exact: true,
        meta: {
            layout: false,
            authRoute: true
        }
    }
]

export default routes
