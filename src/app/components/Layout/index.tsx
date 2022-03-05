import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { Navbar, ClippedDrawer } from '..';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Stack width="100%" height="100%">
      <Navbar />
      <Stack flexDirection="row">
        <ClippedDrawer />
        {children}
      </Stack>
    </Stack>
  );
}

export { Layout };
