import React from 'react';
import { Card, Skeleton, Stack } from '@mui/material';

function SkeletonCard() {
  return (
    <Card
      sx={{
        margin: 1,
        width: '250px',
        height: '202px',
      }}
    >
      <Stack padding={1}>
        <Skeleton variant="text" width="200px" height="40px" />
        <Skeleton variant="text" width="150px" height="24px" />
        <Skeleton variant="text" width="100px" height="24px" />
        <Skeleton variant="text" width="110px" height="24px" />
        <Skeleton variant="text" width="130px" height="24px" />
        <Skeleton variant="text" width="150px" height="24px" />
      </Stack>
    </Card>
  );
}

export { SkeletonCard };
