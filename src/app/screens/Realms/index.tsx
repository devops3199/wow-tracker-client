import React from 'react';
import { useQuery } from 'react-query';
import { httpClient } from '../../libs';
import { Layout } from '../../components';
import { Box, Stack, Card, CardContent, CardActions, Typography as Text, Button } from '@mui/material';

type Name = {
  en_US: string;
  ko_KR: string;
};

type Realm = {
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
  const { data: realms, isLoading } = useQuery(['realms'], () => httpClient.get<Realm[]>('/api/bnet/realms'));

  // effect
  // handler
  return (
    <Layout>
      <Box component="div" sx={{ flexGrow: 1, p: 1 }}>
        <Stack flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            realms?.map((server) => {
              return (
                <Card key={server.id.toString()} sx={{ margin: 1, flex: 'auto', height: '300px' }}>
                  <CardContent>
                    <Text variant="h4">{server.population.name.ko_KR}</Text>
                    <Text variant="h6">{server.has_queue ? '대기 필요' : '대기 없음'}</Text>
                    {server.realms.map((realm) => {
                      return (
                        <Text key={realm.id.toString()} variant="subtitle2">
                          {`${realm.name.ko_KR} (${realm.name.en_US})`}
                        </Text>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })
          )}
        </Stack>
      </Box>
    </Layout>
  );
}

export { Realms };
