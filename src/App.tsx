import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header toggleTheme={toggleTheme} />
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
