import React, { createContext, useContext } from 'react';
import firebase from 'firebase/app';
import { httpClient } from '../libs/http-client';
import { auth, Provider } from 'shared/firebase';
import * as moment from 'moment';
import { setCookie, getCookie } from '../libs/cookie';

const AuthContext = createContext<any | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children } : { children : React.ReactNode }) {

    const [currentUser, setCurrentUser] = React.useState<firebase.User | null>();
    const [loading, setLoading] = React.useState<boolean>(false);

    function register(email: string, name: string, password: string) {
        return httpClient.post('/api/user/register', { email, name, password, createdAt: new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss')) });
    }

    async function login(email: string, password: string) {
        const token = await httpClient.post<string>('/api/user/login', { email, password });
        setCookie('token', token, 7);
        httpClient.setAuthorization(token);
        setUser();
    }

    async function setUser() {
        const user = await httpClient.get<{ id: number; email: string; name: string; }>('/api/user/self');
        // TODO: save to context
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email : string) {
        return auth.sendPasswordResetEmail(email);
    }

    function githubLogin() {
        return auth.signInWithPopup(Provider.github);
    }

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        register,
        login,
        logout,
        resetPassword,
        githubLogin
    }

    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    );
};
