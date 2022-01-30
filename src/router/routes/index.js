import { lazy } from "react"

const routes = [
    {
        path: '/',
        component: lazy(() => import('../../pages/main')),
        exact: true
    },
    {
        path: '/products',
        component: lazy(() => import('../../pages/products')),
        exact: true
    }
]

export default routes