//eslint-disable no-unused-vars

//Import area
import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './Main';
import { Bona, Fake } from './functions/ShowResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Main/>} />
        <Route path="/bona" element={<Bona/>} />
        <Route path="/fake" element={<Fake/>} />
      </Routes>
    </Router>
  );
}

export default App;