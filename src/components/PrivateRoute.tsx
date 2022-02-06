import React, { ReactFragment } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { getCookie } from '../libs/cookie';

type PrivateRouteProps = RouteProps & { component: ReactFragment }

export default function PrivateRoute(props : PrivateRouteProps) {
    const { component: Component, ...rest } = props;
    const hasToken = getCookie('token');

    return (
        <Route {...rest} render={props => {
            return !!hasToken ? <Component {...props} /> : <Redirect to='/login' />
        }}>
            
        </Route>
    );
};
