import React from 'react';
import { useQuery } from 'react-query';
import { useAuth } from '../../libs';
import { httpClient } from '../../libs';
import { Layout } from '../../components';
import { Box, Typography as Text, Toolbar } from '@mui/material';

function Characters() {
  // custom hooks
  const { currentUser } = useAuth();

  // state
  // query
  const { data: characters, isLoading } = useQuery<any>(['characters'], () => httpClient.get('/api/bnet/profile'));

  // effect
  // handler
  return (
    <Layout>
      <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {isLoading ? <Text>Loading...</Text> : characters.wow_accounts.toString()}
      </Box>
    </Layout>
  );
}

export { Characters };
