import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home } from './Components/Home';
import { Pokemon } from './Components/Pokemon';

export const App = () => {
    return (
        <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon/:id" element={<Pokemon />} />
          </Routes>
        </Router>

        </>
    )
}
