import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import * as ROUTES from './routes';
import { darkTheme, GlobalStyles, lightTheme } from './styles/globals';
import useTheme from './utils/useTheme';

function App() {
  const [theme] = useTheme();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path={ROUTES.HOME} component={Home} exact />
          <Route path={ROUTES.CONTACT} component={ContactPage} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
