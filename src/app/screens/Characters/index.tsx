import React from 'react';
import { useQuery } from 'react-query';
import { httpClient } from '../../libs';
import { Layout } from '../../components';
import { Box, Stack, Card, CardContent, CardActions, Typography as Text, Button } from '@mui/material';

type Name = {
  en_US: string;
  ko_KR: string;
};

type Characters = {
  wow_accounts: {
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
};

function Characters() {
  // custom hooks
  // state
  // query
  const { data: characters, isLoading } = useQuery(['characters'], () =>
    httpClient.get<Characters>('/api/bnet/profile'),
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
            characters?.wow_accounts.map((account) =>
              account.characters.map((character) => (
                <Card key={character.id.toString()} sx={{ margin: 1, width: '250px', height: '100%' }}>
                  <CardContent>
                    <Text>{`서버: ${character.realm.name.ko_KR}`}</Text>
                    <Text>{`캐릭터: ${character.name}`}</Text>
                    <Text>{`레벨: ${character.level}`}</Text>
                    <Text>{`진영: ${character.faction.name.ko_KR}`}</Text>
                    <Text>{`성별: ${character.gender.name.ko_KR}`}</Text>
                    <Text>{`직업: ${character.playable_class.name.ko_KR}`}</Text>
                    <Text>{`종족: ${character.playable_race.name.ko_KR}`}</Text>
                  </CardContent>
                  <CardActions>
                    <Button size="small">More...</Button>
                  </CardActions>
                </Card>
              )),
            )
          )}
        </Stack>
      </Box>
    </Layout>
  );
}

export { Characters };
