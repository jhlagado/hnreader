import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, customTheme } from './styles';
import { Main } from './components/main';
import { Menu } from './components/menu';
import { Info } from './components/info';

export const App: React.FC<any> = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const openClass = open ? 'active' : '';
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={customTheme}>
        <div id="layout" className={openClass}>
          <a
            href="#menu"
            id="menuLink"
            className={`menu-link ${openClass}`}
            onClick={handleClick}
          >
            <span></span>
          </a>
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/info">
                  <Info></Info>
                </Route>
              </Switch>
            </div>
            <Menu openClass={openClass} />
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
};
App.displayName = 'App';
