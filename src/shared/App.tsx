import React from 'react';
import styled from 'styled-components';
import { Register, Login, Main, FindPassword, AddData } from 'pages/pages';
import { Header, PrivateRoute } from 'components/components';
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
                <PrivateRoute exact path="/" component={ Main } />
                <PrivateRoute exact path="/add" component={ AddData } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/findpassword" component={ FindPassword } />
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
