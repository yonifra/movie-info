import React from 'react';
import logo from './logo.svg';
import MovieInformation from './Components/MovieInformation'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /> 
      <MovieInformation />
    </div>
  );
}

export default App;
