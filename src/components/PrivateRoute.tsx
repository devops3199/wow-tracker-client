import React, { ReactFragment } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

type PrivateRouteProps = RouteProps & { component: ReactFragment }

export default function PrivateRoute(props : PrivateRouteProps) {
    const { component: Component, ...rest } = props;
    const { currentUser } = useAuth();

    return (
        <Route {...rest} render={props => {
            return !!currentUser ? <Component {...props} /> : <Redirect to='/login' />
        }}>
            
        </Route>
    );
};
