import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling & Currency App</h1>
      <Counter />
      <CurrencyConverter />
    </div>
  );
}

export default App;
