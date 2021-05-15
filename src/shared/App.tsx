import React from 'react';
import styled from 'styled-components';
import { Register, Login, Main, FindPassword } from 'pages/pages';
import { Header } from 'components/components';
import AuthProvider from 'contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <AppContainer>
      <Router>
        <AuthProvider>
          <Header />
          <div>
              <Switch>
                <Route exact path="/" component={ Main } />
                <Route path="/register" component={ Register } />
                <Route path="/login" component={ Login } />
                <Route path="/findpassword" component={ FindPassword } />
              </Switch>
          </div>
        </AuthProvider>
      </Router>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;
