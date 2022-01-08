import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import logging from 'shared/logging';
import styled from 'styled-components';

export default function Login() {
    const history = useHistory();
    const { login, githubLogin } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e : React.FormEvent) {
        e.preventDefault();

        logging.info(email);
        try {
            setError('');
            setLoading(true);
            const result = await login(email, password);
            logging.info(result);
            alert('환영하네 용사여');
            history.push("/");
        } catch (e) {
            setError('로그인에 실패했습니다.');
            logging.error(e);
        }
    }

    async function socialLogin() {
        await githubLogin();
        history.push("/");
    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleLogin}>
                <InputWrapper>
                    <input type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} required />
                </InputWrapper>
                <InputWrapper>
                    <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} required />
                </InputWrapper>
                <ButtonWrapper>
                    <button disabled={loading}>
                        로그인
                    </button>
                </ButtonWrapper>
                <span>{error}</span>
            </LoginForm>
            <SocialLoginWrapper>
                <button onClick={socialLogin}>
                    깃허브 로그인
                </button>
            </SocialLoginWrapper>
            <BottomWrapper>
                <Navigation>
                    <Link to="/register">회원가입하기</Link>
                    <Link to="/findpassword">비밀번호 찾기</Link>
                </Navigation>
            </BottomWrapper>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    width: 100%;
`;

const LoginForm = styled.form`
    width: 100%;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1.5rem 0;
    & input {
        width: 500px;
        padding: .75rem 1rem;
        border: 1px solid #FFCD4A;
        border-radius: 5px;
        outline: none;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1.5rem 0;
    & button {
        padding: .25rem .75rem;
        background-color: #FFCD4A;
        border: 1px solid #FFCD4A;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
    }
`;

const SocialLoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1.5rem 0;
    & button {
        padding: .25rem .75rem;
        background-color: #3c4043;
        border: 1px solid #3c4043;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        color: #fff;
    }
`;

const BottomWrapper = styled.div`
    width: 100%;
    margin: 1.5rem 0;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: center;
    & a {
        margin: 0 .5rem;
    }
`;