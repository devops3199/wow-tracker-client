import React from 'react';
import { useQuery } from 'react-query';
import { httpClient } from '../../libs';
import { Layout, RealmCard } from '../../components';
import { Box, Stack, Card, CardContent, Typography as Text } from '@mui/material';

type Name = {
  en_US: string;
  ko_KR: string;
};

type UnitedRealm = {
  has_queue: boolean;
  id: number;
  population: {
    name: Name;
  };
  realms: {
    id: number;
    name: Name;
    slug: string;
    timezone: string;
    type: {
      name: Name;
    };
  }[];
};

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
