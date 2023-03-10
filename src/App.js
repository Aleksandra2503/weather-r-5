import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaulrCity="Murnau" />
      <footer>
        This project was coded by {""}<a href="https://www.linkedin.com/in/oleksandra-murashko-1b14a4254/" target="_blank" rel="noopener noreferrer">Oleksandra Murashko</a> {""} and is{" "}
      <a href="https://github.com/Aleksandra2503/weather-r-5"
      target="_blank" rel="noopener noreferrer">
        open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  );
}


