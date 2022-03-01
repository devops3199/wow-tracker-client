import React from 'react';
import { useAuth } from '../../libs';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

const PAGES = ['Characters'];

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WoW Tracker
          </Typography>
          {currentUser ? (
            <>
              <Typography variant="caption">환영합니다! {currentUser?.battleTag}</Typography>
              <Button color="inherit">로그아웃</Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              배틀넷 로그인
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { Navbar };
