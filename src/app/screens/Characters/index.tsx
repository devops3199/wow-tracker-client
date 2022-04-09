import React from 'react';
import { useQuery } from 'react-query';
import { httpClient } from '../../libs';
import { Layout, CharacterCard, SkeletonCard } from '../../components';
import { Box, Stack } from '@mui/material';

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
          {isLoading
            ? Array(20)
                .fill(0)
                .map((_, index) => <SkeletonCard key={index.toString()} />)
            : data?.map((account) =>
                account.characters.map((character, index) => (
                  <CharacterCard key={index.toString()} character={character} />
                )),
              )}
        </Stack>
      </Box>
    </Layout>
  );
}

export { Characters };
