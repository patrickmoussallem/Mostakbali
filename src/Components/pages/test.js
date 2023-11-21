// TestPage.js
import React, { useState } from 'react';
import Question from '../Question';
import questions from '../questionsData';
import './test.css'
import Navbar from '../Navbar'

const TestPage = () => {
  const [tempScores, setTempScores] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChoiceSelect = (questionIndex, choiceIndex) => {
    // Update the temporary scores array based on the user's choice
    const newTempScores = [...tempScores];
    newTempScores[questionIndex] = questions[questionIndex].choices[choiceIndex].score;
    setTempScores(newTempScores);
  };

  const calculateScore = () => {
    const totalScore = tempScores.reduce((acc, score) => acc + (score || 0), 0);
    console.log('Total Score:', totalScore);

    // Set submitted to true to trigger the result section rendering
    setSubmitted(true);
  };

  const retakeTest = () => {
    // Reset the state for a new test
    setTempScores([]);
    setSubmitted(false);
  };

  return (
    
    <div>
        <Navbar/>
        <h1>Take the Test</h1>
        <div className='test-container'>
      
      {questions.map((question, index) => (
        <div key={index} className="question">
        
            <Question
            question={question.text}
            choices={question.choices}
            onChoiceSelect={(choiceIndex) => handleChoiceSelect(index, choiceIndex)}
            allowInteraction={!submitted}
            />
      </div>
      ))}
      <button className='test_btns' onClick={() => calculateScore()} disabled={submitted}>
        Submit
      </button>
      </div>

      {submitted && (
        <div className='result-container'>
          <h2>Result</h2>
          <p>Total Score: {tempScores.reduce((acc, score) => acc + (score || 0), 0)}</p>
          <button className='test_btns'  onClick={() => retakeTest()}>Retake Test</button>
        </div>
      )}
    </div>
  );
};

export default TestPage;
