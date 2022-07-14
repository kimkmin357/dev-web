import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Clock from './components/clock'
import Signup from './components/signup';
import Signin from './components/signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/clock" element={<Clock />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
