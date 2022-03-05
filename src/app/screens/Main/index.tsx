import React from 'react';
import { useAuth } from '../../libs';
import { Layout } from '../../components';
import { Box, Typography as Text } from '@mui/material';

function Main() {
  // custom hooks
  const { currentUser } = useAuth();

  // state
  // effect
  // handler

  return (
    <Layout>
      <Box component="div" sx={{ flexGrow: 1, p: 1 }}>
        {currentUser ? <Text variant="h3">로그인 완료</Text> : <Text variant="h3">배틀넷 계정으로 로그인 필요</Text>}
      </Box>
    </Layout>
  );
}

export { Main };
