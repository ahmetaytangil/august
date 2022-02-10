import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../firebase/contexts/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                currentUser ?
                    <Component
                        {...props}
                    />
                    :
                    <Redirect to="/" />
            }}
        >
        </Route>
    )
}
