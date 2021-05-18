import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from 'contexts/AuthProvider';
import { wowDB } from 'shared/firebase';

export default function Main() {
    const { currentUser } = useAuth();

    return (
      <MainContainer>
        <h1>{currentUser.email}</h1>
        <h1>{currentUser.uid}</h1>
        <h1>{currentUser.displayName}</h1>
      </MainContainer>
    );
};

const MainContainer = styled.div`
  width: 100%;
`;
