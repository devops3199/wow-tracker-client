# World of Warcraft Tracker

<p align='center'>
    <img src="https://img.shields.io/badge/Typescript-v4.1.2-blue?logo=Typescript"/>
    <img src="https://img.shields.io/badge/React-v17.0.2-blue?logo=React"/>
    <img src="https://img.shields.io/badge/StyledComponents-v5.3.0-pink?logo=styled-components"/>
    <img src="https://img.shields.io/badge/Chart.JS-v3.3.0-FF6384?logo=chart-dot-js"/>
    <img src="https://img.shields.io/badge/Firebase-v8.4.3-orange?logo=Firebase"/>
    <img src="https://img.shields.io/badge/yarn-^1.22.10-yellow?logo=yarn" />
</p>
<p align='center'>
    <img src="./src/media/wow.png"/>
</p>

### :timer_clock: 개발기간
+ 2021년 05월 ~ 현재

###	:pushpin: 기능
+ 플레이 시간 시각화
<img src="./src/media/chartjs.PNG"/>

+ 로그인/깃허브 로그인/회원가입/비밀번호 찾기
+ 인증 Custom Hook 개발
```Javascript
import React from 'react';
import firebase from 'firebase/app';
import { auth, Provider } from 'shared/firebase';
import logging from 'shared/logging';

const AuthContext = React.createContext<any | null>(null);

export function useAuth() {
    return React.useContext(AuthContext);
}

export default function AuthProvider({ children } : { children : React.ReactNode }) {

    const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);

    function register(email : string, password : string) {
        return auth.createUserWithEmailAndPassword(email, password); // Promise 객체 반환
    }

    function login(email : string, password : string) {
        return auth.signInWithEmailAndPassword(email, password); // Promise 객체 반환
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email : string) {
        return auth.sendPasswordResetEmail(email);
    }

    function githubLogin() {
        return auth.signInWithPopup(Provider.github); // Promise 객체 반환
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
```