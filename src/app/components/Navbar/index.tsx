import React from 'react';
import { useAuth } from '../../libs';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tracker
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
