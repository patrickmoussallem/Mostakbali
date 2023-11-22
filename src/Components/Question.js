// Question.js
import React from 'react';
import Choice from './Choice';
import './Question.css'

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
        <div className='choice-dropdown'>
        <select onChange={handleChange} disabled={!allowInteraction}>
          <option value={-1}>Select an option</option>
          {choices.map((choice, index) => (
            <option key={index} value={index}>
              {choice.text}
            </option>
          ))}
        </select>
        </div>
      </div>
    );
  };
  
  export default Question;
