import React from 'react';
import { useQuery } from 'react-query';
import { httpClient } from '../../libs';
import { Layout, CharacterCard } from '../../components';
import { Box, Stack, Typography as Text } from '@mui/material';

function Characters() {
  // custom hooks
  // state
  // query
  const { data, isLoading } = useQuery(['characters'], () => httpClient.get<CharactersByAccounts>('/api/bnet/profile'));

  // effect
  // handler
  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 1 }}>
        <Stack flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            data?.map((account) => account.characters.map((character) => <CharacterCard character={character} />))
          )}
        </Stack>
      </Box>
    </Layout>
  );
}

export { Characters };
