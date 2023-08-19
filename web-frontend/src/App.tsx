import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from './Component/Card';
import Navbar from './Component/Navbar';
import GlobalStyle from './Theme/base';
import { theme } from './Theme/theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from './Screen/MovieList';

function App() {
  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MovieList />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
