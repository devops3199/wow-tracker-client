import React from 'react';
import { Layout } from '../../components';
import { Box, Toolbar, Typography as Text } from '@mui/material';

function NotFound() {
  // custom hooks
  // state
  // effect
  // handler

  return (
    <Layout>
      <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Text variant="h4">404</Text>
        <Text variant="subtitle1">Not Found</Text>
      </Box>
    </Layout>
  );
}

export { NotFound };
