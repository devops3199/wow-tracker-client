import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  const handleLogin = () => {
    window.open('http://localhost:4000/api/auth', '_self');
  };
  
  return(
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tracker
        </Typography>
        <Button color="inherit" onClick={handleLogin}>배틀넷 로그인</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );    
}

export { Navbar };