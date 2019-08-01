import React from 'react';
import MovieInformation from './Components/MovieInformation'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <MovieInformation />
    </div>
  );
}

export default App;
