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
        path: '/products/new',
        component: lazy(() => import('../../pages/products/AddProducts'))
    },
    {
        path: '/partners',
        component: lazy(() => import('../../pages/partners')),
        exact: true
    },
    {
        path: '/settings/page',
        component: lazy(() => import('../../pages/settings/pages')),
        exact: true
    },
    {
        path: '/settings/page/new',
        component: lazy(() => import('../../pages/settings/pages/New')),
        exact: true
    },
    {
        path: '/settings/slider',
        component: lazy(() => import('../../pages/settings/slider')),
        exact: true
    }
    // {
    //     path: '/login',
    //     component: lazy(() => import('../../pages/login')),
    //     exact: true,
    //     meta: {
    //         layout: false,
    //         authRoute: true
    //     }
    // }
]

export default routes
