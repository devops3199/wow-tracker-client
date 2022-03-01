import React, { ReactNode, createContext, useState, useEffect, useContext } from 'react';
import { httpClient } from '..';

type User = {
  id: number;
  token: string;
  battleTag: string;
};

const AuthContext = createContext<{ currentUser: User | undefined }>({ currentUser: undefined });

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: { children: ReactNode }) {
  // custom hooks
  // state
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  // effect
  useEffect(() => {
    async function init() {
      setLoading(true);
      const user = await httpClient.get<{ id: number; token: string; battleTag: string }>('/api/auth/success');
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
    }
    init();
  }, []);

  // handler

  return <AuthContext.Provider value={{ currentUser }}>{!loading && children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
