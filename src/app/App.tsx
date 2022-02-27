import React from 'react';
import { AuthProvider } from './libs';
import { Box } from '@mui/material';
import { Navbar } from './components';

function App() {
  return (
    <AuthProvider>
      <Box>
        <Navbar />
      </Box>
    </AuthProvider>

  );
}

export { App };