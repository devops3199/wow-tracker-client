import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './libs';
import { Box } from '@mui/material';
import { Main, Characters, NotFound } from './screens';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Box>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Box>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export { App };
