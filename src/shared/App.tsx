import styled from 'styled-components';
import { Register, Login, Main, FindPassword, AddData } from 'pages/pages';
import { Header, PrivateRoute } from 'components';
import AuthProvider from 'contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'shared/GlobalStyle';

export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute exact path="/add" component={AddData} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/find-password" component={FindPassword} />
          </Switch>
        </Router>
      </AuthProvider>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;
