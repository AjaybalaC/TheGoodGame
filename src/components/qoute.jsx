import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button className='btn' onClick={() => onSave(quote)}>Save to List</button>
    </div>
  );
};

export default QuoteCard;