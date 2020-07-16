import React from 'react';
import './App.css';
import NavBar from './components/navbar.js';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
    <div>
      <Map/>
    </div>
  );
}

export default App;
