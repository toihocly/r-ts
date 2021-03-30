import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useIsAuthenticated } from '../hooks/auth-hooks'

type PrivateRouteProps = {
    children: JSX.Element | (JSX.Element | null | undefined | boolean)[] | null | undefined | boolean
    path: string
}
const PrivateRoute = React.memo((props: PrivateRouteProps) => {
    const {
        children,
        path,
    } = props
    const isAuthenticated = useIsAuthenticated()
    return (<Route
        path={path}
        render={({ location }) =>
            isAuthenticated ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location },
                    }}
                />
            )
        }
    />)
})
export default PrivateRoute
