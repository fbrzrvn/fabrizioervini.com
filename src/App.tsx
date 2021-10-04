import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeProvider from './context/themeProvider';
import TranslationsProvider from './context/translationsProvider';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ROUTES from './routes';

function App() {
  return (
    <TranslationsProvider>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route path={ROUTES.HOME} component={Home} exact />
            <Route path={ROUTES.CONTACT} component={ContactPage} exact />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </TranslationsProvider>
  );
}

export default App;
