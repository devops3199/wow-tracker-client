import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './libs';
import { Box } from '@mui/material';
import { Navbar } from './components';
import { Main, NotFound } from './screens';

function App() {
  return (
    <AuthProvider>
      <Box>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Box>
    </AuthProvider>
  );
}

export { App };
