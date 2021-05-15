import React from 'react';
import { Link } from 'react-router-dom';
import logging from 'shared/logging';
import styled from 'styled-components';
import { useAuth } from 'contexts/AuthProvider';
import logo from 'media/wow.png';

export default function Header() {
    const { logout } = useAuth();

    function handgleLogout() {
        logout();
    }

    return (
        <HeaderContainer>
            <img src={logo} />
            <Menu>
                <span><Link to='/'>메인</Link></span>
                <span><Link to='/add'>등록</Link></span>
                <span><Link to='/login'>로그인</Link></span>
                <span onClick={handgleLogout}>로그아웃</span>
            </Menu>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    & img {
        width: 300px;
    }
`;

const Menu = styled.div`
    width: 100%;

    & span {
        margin: 0 1rem;
        pointer: cursor;
    }
`;
