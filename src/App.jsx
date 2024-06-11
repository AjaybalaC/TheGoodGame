import React, { useState, useEffect } from 'react';
import QuoteCard from './components/qoute';
import SavedQuotes from './components/savedQoute';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button onClick={fetchQuote}>New Quote</button>
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
