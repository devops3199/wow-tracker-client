import React, { ReactNode, createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '..';

type User = {
  id: number;
  token: string;
  battleTag: string;
};

const AuthContext = createContext<{ currentUser: User | undefined; setCurrentUser: (user: User | undefined) => void }>({
  currentUser: undefined,
  setCurrentUser: () => ({}),
});

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

  return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{!loading && children}</AuthContext.Provider>;
}

function useLogout() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  return useCallback(() => {
    context.setCurrentUser(undefined);
    navigate('/');
  }, [context, navigate]);
}

export { AuthProvider, useAuth, useLogout };
