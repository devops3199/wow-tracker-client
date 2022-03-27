import React from 'react';
import { Card, CardContent, CardActions, Button, Typography as Text } from '@mui/material';

type Name = {
  en_US: string;
  ko_KR: string;
};

type Character = {
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
};

function CharacterCard(props: { character: Character }) {
  const { character } = props;

  return (
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
  );
}

export { CharacterCard };
