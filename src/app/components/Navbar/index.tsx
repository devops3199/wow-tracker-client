import React from 'react';
import { useAuth } from '../../libs';
import { Link, AppBar, Toolbar, Typography as Text, Button } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';

function Navbar() {
  // custom hooks
  const { currentUser } = useAuth();

  // state
  // effect
  // handler
  const handleLogin = () => {
    window.open('http://localhost:4000/api/auth', '_self');
  };

  return (
    <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Link component={ReactLink} sx={{ flexGrow: 1 }} underline="none" variant="h6" color="white" to="/">
          WoW Tracker
        </Link>
        {currentUser ? (
          <>
            <Text variant="caption">환영합니다! {currentUser?.battleTag}</Text>
            <Button color="inherit">로그아웃</Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogin}>
            배틀넷 로그인
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export { Navbar };
