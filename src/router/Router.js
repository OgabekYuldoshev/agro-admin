
// import { lazy } from 'react'
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isUserLoggedIn } from '@utils'
import RoutesList from './routes'
import DefaultLayout from '@src/layout'

const RouterApp = () => {
    const FinalRoute = props => {
        const route = props.route

        if (
            (!isUserLoggedIn() && route.meta === undefined) ||
            (!isUserLoggedIn() && route.meta && !route.meta.authRoute && !route.meta.publicRoute)
        ) {
            return <Redirect to='/login' />
        } else if (route.meta && route.meta.authRoute && isUserLoggedIn()) {
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
