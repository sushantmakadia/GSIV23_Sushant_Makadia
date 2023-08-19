import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from './Component/Card';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from './Screen/MovieList';
import MovieDetails from './Screen/MovieDetails';

function App() {
  return (
    <div className="App" >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/details" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
