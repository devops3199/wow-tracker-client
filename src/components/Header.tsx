import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from 'contexts/AuthProvider';
import logo from 'media/wow.png';

export default function Header() {
    const { logout, currentUser } = useAuth();

    function handgleLogout() {
        logout();
        alert('잘가게 용사여');
    }

    return (
        <HeaderContainer>
            <img src={logo} alt="WoW Logo" />
            <Menu>
                <span><Link to='/'>메인</Link></span>
                <span><Link to='/add'>등록</Link></span>
                { currentUser ? (<span> Welcome! {currentUser.email} </span>) : (<span><Link to='/login'>로그인</Link></span>) }
                { currentUser ? (<Logout onClick={handgleLogout}>로그아웃</Logout>) : (<></>) }
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

const Logout = styled.span`
    padding: .5rem 1rem;
    background-color: tomato;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`;
