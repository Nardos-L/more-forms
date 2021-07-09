import React, { useState } from 'react';
import Form from './components/Form';
import Results from './components/Results'
import './App.css';

function App() {

  return (
    <div className="App">
      <Form />
      {/* <Form inputs={state} setInputs={setState} inputError={inputError} setInputError={setInputError} />
      <Results data={state} /> */}
    </div>
  );
}
export default App;
