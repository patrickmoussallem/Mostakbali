// Choice.js
import React from 'react';

const Choice = ({ choice, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{choice.text}</button>
    </li>
  );
};

export default Choice;
