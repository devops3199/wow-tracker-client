import React from 'react';
import { useAuth } from '../../libs';
import { httpClient } from '../../libs';
import { Layout } from '../../components';
import { Box, Typography as Text, Toolbar } from '@mui/material';

function Main() {
  // custom hooks
  const { currentUser } = useAuth();

  // state
  // effect
  // handler
  const handleUserWow = async () => {
    const test = await httpClient.get('/api/bnet/profile');
    console.log(test);
  };

  return (
    <Layout>
      <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {currentUser ? <Text variant="h3">로그인 완료</Text> : <Text variant="h3">배틀넷 계정으로 로그인 필요</Text>}
      </Box>
    </Layout>
  );
}

export { Main };
