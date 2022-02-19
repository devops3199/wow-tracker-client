import React, { createContext, useContext, useState, useEffect } from 'react';
import { httpClient } from '../libs/http-client';
import * as moment from 'moment';
import { setCookie, getCookie, removeCookie } from '../libs/cookie';

type User = {
    id: number;
    email: string;
    name: string;
}

const AuthContext = createContext<{ currentUser?: User; register: (email: string, name: string, password: string) => Promise<void>; login: (email: string, password: string) => Promise<void>; logout: () => void }>({
    currentUser: undefined,
    register: async (email: string, name: string, password: string) => {
        await new Promise<void>(resolve => resolve());
    },
    login: async (email: string, password: string) => {
        await new Promise<void>(resolve => resolve());
    },
    logout: () => ({})
});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children } : { children : React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const cookie = getCookie('token');
        if (!cookie) {
            setLoading(false);
            return;
        }
        httpClient.setAuthorization(cookie[1]);

        setUser();
        setLoading(false);
    }, []);

    async function register(email: string, name: string, password: string) {
        await httpClient.post('/api/user/register', { email, name, password, createdAt: new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss')) });
    }

    async function login(email: string, password: string) {
        const token = await httpClient.post<string>('/api/user/login', { email, password });
        setCookie('token', token, 7);
        httpClient.setAuthorization(token);
        setUser();
    }

    async function setUser() {
        try {
            const user = await httpClient.get<{ id: number; email: string; name: string; }>('/api/user/self');
            setCurrentUser(user);
        } catch {
            setCurrentUser(undefined);
        }
    }

    function logout() {
        setCurrentUser(undefined);
        removeCookie('token');
    }

    return (
        <AuthContext.Provider value={{ currentUser, register, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
