import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';
import Alliance from '../../../assets/images/alliance.png';
import Horde from '../../../assets/images/horde.png';

const Text = styled(Typography)({
  textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
});

const factionMap = {
  Alliance,
  Horde,
};

function CharacterCard(props: { character: Character }) {
  const { character } = props;

  return (
    <Card
      key={character.id.toString()}
      sx={{
        margin: 1,
        width: '250px',
        height: '100%',
        background: `no-repeat center/30% url(${factionMap[character.faction.name.en_US]})`,
      }}
    >
      <CardContent>
        <Text variant="h4">{character.name}</Text>
        <Text>{`서버: ${character.realm.name.ko_KR}`}</Text>
        <Text>{`레벨: ${character.level}`}</Text>
        <Text>{`성별: ${character.gender.name.ko_KR}`}</Text>
        <Text>{`직업: ${character.playable_class.name.ko_KR}`}</Text>
        <Text>{`종족: ${character.playable_race.name.ko_KR}`}</Text>
      </CardContent>
    </Card>
  );
}

export { CharacterCard };
