
// import { lazy } from 'react'
import {
    BrowserRouter as AppRouter,
    Routes,
    Route
} from "react-router-dom"
import RoutesList from './routes'
import DefaultLayout from '@src/layout'

const RouterApp = () => {

    // const NotAuthorized = lazy(() => import('@src/views/NotAuthorized'))
    // const Error = lazy(() => import('@src/views/Error'))
    return (
        <AppRouter basename={process.env.REACT_APP_BASENAME}>
            <Routes>
                {/* <Route
                    exact
                    path='/misc/not-authorized'
                    render={() => (
                        <DefaultLayout>
                            <NotAuthorized />
                        </DefaultLayout>
                    )}
                /> */}
                {RoutesList?.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact === true}
                        element={(
                            <DefaultLayout>
                                <route.component />
                            </DefaultLayout>
                        )
                        }
                    />
                )
                )}
                {/* <Route path='*' component={Error} /> */}
            </Routes>
        </AppRouter>
    )
}

export default RouterApp
