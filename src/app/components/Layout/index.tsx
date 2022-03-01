import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Navbar, ClippedDrawer } from '..';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <ClippedDrawer />
      {children}
    </Box>
  );
}

export { Layout };
