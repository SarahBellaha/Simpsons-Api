import React from 'react';
import { useState } from 'react';
import './App.css';
import QuoteCard from './Components/QuoteCard.js';
import axios from 'axios';

function App() {

  const [quote, setQuote] = useState('');

  function getQuote () {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      console.log(data[0])
      setQuote(data[0]);
    });
  }
  

  return (
    <div className="App">
      <QuoteCard {...quote} />
      <button type="button" onClick={getQuote}> Change Quote </button>
    </div>
  );
}

export default App;
