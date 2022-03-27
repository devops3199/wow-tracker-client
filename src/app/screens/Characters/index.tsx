import React from 'react';
import { useQuery } from 'react-query';
import { httpClient } from '../../libs';
import { Layout, CharacterCard } from '../../components';
import { Box, Stack, Card, CardContent, CardActions, Typography as Text, Button } from '@mui/material';

type Name = {
  en_US: string;
  ko_KR: string;
};

type CharactersByAccounts = {
  id: number;
  characters: {
    id: number;
    name: string;
    realm: {
      name: Name;
      slug: string;
    };
    playable_class: {
      name: Name;
    };
    playable_race: {
      name: Name;
    };
    gender: {
      name: Name;
    };
    faction: {
      name: Name;
    };
    level: number;
  }[];
}[];

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
