// Question.js
import React from 'react';
import Choice from './Choice';

const Question = ({ question, choices, onChoiceSelect, allowInteraction }) => {
    const handleChange = (e) => {
      // Only call onChoiceSelect if interaction is allowed
      if (allowInteraction) {
        onChoiceSelect(Number(e.target.value));
      }
    };
  
    return (
      <div>
        <h3>{question}</h3>
        <select onChange={handleChange} disabled={!allowInteraction}>
          <option value={-1}>Select an option</option>
          {choices.map((choice, index) => (
            <option key={index} value={index}>
              {choice.text}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Question;
