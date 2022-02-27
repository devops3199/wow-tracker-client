import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './libs';
import { Box } from '@mui/material';
import { Navbar } from './components';
import { Main } from './screens';

function App() {
  return (
    <AuthProvider>
      <Box>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </Box>
    </AuthProvider>
  );
}

export { App };
