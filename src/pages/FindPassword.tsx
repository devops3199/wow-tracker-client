import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logging from 'shared/logging';
import styled from 'styled-components';
import { useAuth } from 'contexts/AuthProvider';

export default function FindPassword() {
    const history = useHistory();
    const { resetPassword } = useAuth();
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    async function handleFindPassword() {
        logging.info('비밀번호 찾기');

        try {
            setError('');
            setLoading(true);
            await resetPassword(email);
            history.push("/login");
            alert('이메일을 확인 해주세요.');
        } catch (e) {
            setError('올바른 이메일을 입력하세요.');
            logging.error(e);
        }

        history.push('/');
    }

    return (
        <PasswordContainer>
            <PasswordForm onSubmit={handleFindPassword}>
                <InputWrapper>
                    <input type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} required />
                </InputWrapper>
                <ButtonWrapper>
                    <button disabled={loading}>
                        비밀번호 이메일로 전송
                    </button>
                </ButtonWrapper>
                <span>{error}</span>
            </PasswordForm>
            <BottomWrapper>
                <Navigation>
                    <Link to="/register">회원가입하기</Link>
                </Navigation>
            </BottomWrapper>
        </PasswordContainer>
    );
};

const PasswordContainer = styled.div`
    width: 100%;
`;

const PasswordForm = styled.form`
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
