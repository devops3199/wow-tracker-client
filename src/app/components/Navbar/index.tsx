import React from 'react';
import { useMutation } from 'react-query';
import { useAuth, useLogout, httpClient } from '../../libs';
import { Link, AppBar, Toolbar, Typography as Text, Button } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';

function Navbar() {
  // custom hooks
  const { currentUser } = useAuth();
  const logout = useLogout();

  // state
  // query
  const { mutate } = useMutation(['logout'], () => httpClient.post<void>('/api/auth/logout', {}), {
    onSuccess: () => logout(),
  });

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
            <Button color="inherit" onClick={() => mutate()}>
              로그아웃
            </Button>
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
