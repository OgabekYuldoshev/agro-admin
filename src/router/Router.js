
// import { lazy } from 'react'
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
// import { isUserLoggedIn } from '@utils'
import RoutesList from './routes'
import DefaultLayout from '@src/layout'
import { useSelector } from "react-redux"

const RouterApp = () => {
    const auth = useSelector(state => state.auth)
    const FinalRoute = props => {
        const route = props.route

        if (
            (!auth.isAuth && route.meta === undefined) ||
            (!auth.isAuth && route.meta && !route.meta.authRoute && !route.meta.publicRoute)
        ) {
            return <Redirect to='/login' />
        } else if (route.meta && route.meta.authRoute && auth.isAuth) {
            return <Redirect to='/' />
        } else {
            if (route.meta && !route.meta.layout) {
                return <route.component {...props} />
            }
            return (
                <DefaultLayout>
                    <route.component {...props} />
                </DefaultLayout>
            )
        }
    }

    return (
        <AppRouter basename={process.env.REACT_APP_BASENAME}>
            <Switch>
                {RoutesList.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact === true}
                            render={props => <FinalRoute route={route} {...props} />}
                        />
                    )
                })}
                {/* <Route path='*' component={Error} /> */}
            </Switch>
        </AppRouter>
    )
}

export default RouterApp
