import React from 'react';
import { AuthContext } from './libs';
import { Box } from '@mui/material';
import { Navbar } from './components';

function App() {
  return (
    <AuthContext>
      <Box>
        <Navbar />
      </Box>
    </AuthContext>

  );
}

export { App };