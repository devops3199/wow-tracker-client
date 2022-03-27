import React from 'react';
import { Card, CardContent, Typography as Text } from '@mui/material';

function RealmCard(props: { unitedRealm: UnitedRealm }) {
  const { unitedRealm } = props;

  return (
    <Card key={unitedRealm.id.toString()} sx={{ margin: 1, flex: 'auto', height: '300px' }}>
      <CardContent>
        <Text variant="h4">{unitedRealm.population.name.ko_KR}</Text>
        <Text variant="h6">{unitedRealm.has_queue ? '대기 필요' : '대기 없음'}</Text>
        {unitedRealm.realms.map((realm) => {
          return (
            <Text key={realm.id.toString()} variant="subtitle2">
              {`${realm.name.ko_KR} (${realm.name.en_US})`}
            </Text>
          );
        })}
      </CardContent>
    </Card>
  );
}

export { RealmCard };
