import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from 'contexts/AuthProvider';

interface PrivateRouteProps extends RouteProps {
    component : any
}

export default function PrivateRoute(props : PrivateRouteProps) {
    const { component: Component, ...rest } = props;
    const { currentUser } = useAuth();

    return (
        <Route {...rest} render={props => {
            return currentUser ? <Component {...props} /> : <Redirect to='/login' />
        }}>
            
        </Route>
    );
};
