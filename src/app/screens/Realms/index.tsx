import React from 'react';
import { useQuery } from 'react-query';
import { httpClient } from '../../libs';
import { Layout, RealmCard } from '../../components';
import { Box, Stack, Typography as Text } from '@mui/material';

function Realms() {
  // custom hooks
  // state
  // query
  const { data: unitedRealms, isLoading } = useQuery(['realms'], () =>
    httpClient.get<UnitedRealm[]>('/api/bnet/realms'),
  );

  // effect
  // handler
  return (
    <Layout>
      <Box component="div" sx={{ flexGrow: 1, p: 1 }}>
        <Stack flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            unitedRealms?.map((unitedRealm) => <RealmCard unitedRealm={unitedRealm} />)
          )}
        </Stack>
      </Box>
    </Layout>
  );
}

export { Realms };
