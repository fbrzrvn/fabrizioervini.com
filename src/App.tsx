import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import TranslationsProvider from './context/translationsProvider';
import useTheme from './hooks/useTheme';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ROUTES from './routes';
import { darkTheme, GlobalStyles, lightTheme } from './styles/globals';

function App() {
  const [theme] = useTheme();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <TranslationsProvider>
        <Router>
          <Switch>
            <Route path={ROUTES.HOME} component={Home} exact />
            <Route path={ROUTES.CONTACT} component={ContactPage} exact />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </TranslationsProvider>
    </ThemeProvider>
  );
}

export default App;
