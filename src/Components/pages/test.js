// TestPage.js
import React, { useState } from 'react';
import Question from '../Question';
import questions from '../questionsData';
import './test.css'
import Navbar from '../Navbar'
import { useNavigate, Link } from "react-router-dom"



const TestPage = () => {
  const [tempScores, setTempScores] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const handleChoiceSelect = (questionIndex, choiceIndex) => {
    // Update the temporary scores array based on the user's choice
    const newTempScores = [...tempScores];
    newTempScores[questionIndex] = questions[questionIndex].choices[choiceIndex].score;
    setTempScores(newTempScores);
  };

  const calculateScore = () => {
    // Check if all questions have been answered
    if (tempScores.length !== questions.length) {
      setError('Please answer all questions before submitting.');
      return;
    }

    const totalScore = tempScores.reduce((acc, score) => acc + (score || 0), 0);
    console.log('Total Score:', totalScore);

    // Clear any previous errors
    setError(null);

    // Set submitted to true to trigger the result section rendering
    setSubmitted(true);

    // Determine recommendation based on the score range
    setRecommendation(getRecommendation(totalScore));
  };

  const getRecommendation = (score) => {
    // Define score ranges and associated recommendations
    const scoreRanges = [
      { min: 0, max: 40, recommendation: 'Sports Education' },
      { min: 41, max: 80, recommendation: 'Environmental Science' },
      { min: 81, max: 120, recommendation: 'Political Science' },
      { min: 121, max: 160, recommendation: 'Linguistics' },
      { min: 1601, max: 200, recommendation: 'Biomedical Engineering' },
      { min: 201, max: 240, recommendation: 'Marketing' },
      { min: 241, max: 280, recommendation: 'Business Analytics' },
      { min: 281, max: 300, recommendation: 'Aerospace Engineering' },
    ];

    // Find the score range that includes the user's score
    const matchingRange = scoreRanges.find((range) => score >= range.min && score <= range.max);

    // Return the recommendation associated with the matching range
    return matchingRange ? matchingRange.recommendation : 'No recommendation found';
  };
  const history=useNavigate();

  const retakeTest = () => {
    console.log("retaking.....")
    // Reset the state for a new test
    setTempScores([]);
    setSubmitted(false);
    setError(null); // Clear any previous errors
    setRecommendation(null);
    window.location.reload();
  };

  return (
    <div>
       <Navbar/>
        <h1>Take the Test</h1>
        <div className='test-container'>
        {questions.map((question, index) => (
        <div key={index} className="question">
          <div className="question-container">
            <p className="question-number">Question {index + 1}:</p>
          
          </div>
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

      {error && <p className="error-message">{error}</p>}
        </div>
      {submitted && (
        <div className="overlay">
        <div className="modal">
          <h2>Result</h2>
          <p>Recommendation: {recommendation}</p>
          <button className='test_btns' onClick={() => retakeTest()}>Retake Test</button>
        </div>
      </div>
      )}
    </div>
  );
};

export default TestPage;
