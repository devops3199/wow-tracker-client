import React from 'react';
import { useAuth } from '../../libs';
import { Typography as Text } from '@mui/material';

function Main() {
  // custom hooks
  const { currentUser } = useAuth();

  // state
  // effect
  // handler

  return <Text variant="h6">Hello {currentUser?.battleTag}</Text>;
}

export { Main };
