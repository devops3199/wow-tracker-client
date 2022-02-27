import React, { createContext, useState, useEffect } from 'react';
import { httpClient } from '..';

type User = {
  id: number;
  token: string;
  battleTag: string;
};

const AuthContext = createContext<{ currentUser: User | undefined}>({ currentUser: undefined });

function AuthProvider({ children }: { children?: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      setLoading(true);
      const user = await httpClient.get<{ id: number; token: string; battleTag: string }>('/api/auth/success');
      setCurrentUser(user);
      setLoading(false);
    }
    init();
  }, []);

  return (
    <AuthContext value={{ currentUser }}>
      {!loading && children}
    </AuthContext>
  )
}

export { AuthProvider };