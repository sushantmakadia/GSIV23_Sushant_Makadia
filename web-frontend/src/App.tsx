import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from './Component/Card';
import Navbar from './Component/Navbar';
import GlobalStyle from './Theme/base';
import { theme } from './Theme/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar/>
        <Card></Card>
      </ThemeProvider>
    </div>
  );
}

export default App;
