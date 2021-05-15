import React from 'react';
import { useAuth } from 'contexts/AuthProvider';

export default function Main() {
    const { currentUser } = useAuth();

    return (
        <div>
            <h1>{currentUser.email}</h1>
            <h1>{currentUser.uid}</h1>
            <h1>{currentUser.displayName}</h1>
        </div>
    );
};
