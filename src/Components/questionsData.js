const questions = [
    {
      text: 'I like to solve puzzles for fun.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
        ,
      ],
    },
    {
      text: 'I like to teach or train people.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I am good at working independently.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to work in teams or with a group of people.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to set goals for myself - and I usually stay focused on them 😏.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I am good at math.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I pay attention to details when looking at things 🔎.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like putting things together or assembling things; for example, toys or furniture.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to organize things (files, events, etc.).',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like the process of doing an experiment and seeing the result.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I am a creative person; I come up with a lot of ideas.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to try to influence or persuade people.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'When asked to do something, I prefer to have clear instructions to follow instead of using my own way to do it.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to cook.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I enjoy trying to figure out how things work 🕵.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I would like to start my own business.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to work with animals or take care of them. 🐕 🐱 🐑 🐮',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I have played musical instruments or sang regularly - and I am good at it.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: "I don't mind if my job requires working 8 hours per day in the office (instead of going outside to meet with people or to do other things).",
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I am interested in medically healing people 😷.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I prefer to work with things I can see and touch with my hands.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to analyze problems or situations or other things.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I have acted in plays and I liked it.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to lead groups or projects.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to get into discussions about issues.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like working in an outdoor setting.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
   
    {
      text: 'I am naturally good at drawing; for example, painting or sketching.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I am good at keeping track of homework and deadlines.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I enjoy helping other people by donating time or money, comforting someone to make them feel better, or something like that.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    {
      text: 'I like to give speeches 💬.',
      choices: [
        { text: 'Yes', score: 10 },
        { text: 'Sometimes', score: 5 },
        { text: 'No', score: 0 },
      ],
    },
    
  ]; 

  export default questions;