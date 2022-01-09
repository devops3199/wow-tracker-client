import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logging from 'shared/logging';
import styled from 'styled-components';
import { useAuth } from 'contexts/AuthProvider';

export default function Register() {
    const history = useHistory();
    const { register } = useAuth();


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    async function handleRegister(e : React.FormEvent) {
        e.preventDefault();

        if(password !== passwordConfirm) {
            return setError('비밀번호가 다릅니다.');
        }

        try {
            setError('');
            setLoading(true);
            await register(email, password);
            history.push("/login");
        } catch (e) {
            setError('가입에 실패했습니다.');
            logging.error(e);
        }
    }

    return (
        <RegisterContainer>
            <RegisterForm onSubmit={handleRegister}>
                <InputWrapper>
                    <input type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} required />
                </InputWrapper>
                <InputWrapper>
                    <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} required />
                </InputWrapper>
                <InputWrapper>
                    <input type="password" placeholder="비밀번호 확인"onChange={(e) => setPasswordConfirm(e.target.value)} required />
                </InputWrapper>
                <ButtonWrapper>
                    <button disabled={loading}>
                        가입하기
                    </button>
                </ButtonWrapper>
                <span>{error}</span>
            </RegisterForm>
            <BottomWrapper>
                <Navigation>
                    <Link to="/login">로그인하기</Link>
                </Navigation>
            </BottomWrapper>
        </RegisterContainer>
    );
};

const RegisterContainer = styled.div`
    width: 100%;
`;

const RegisterForm = styled.form`
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