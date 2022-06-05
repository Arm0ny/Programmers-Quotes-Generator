import './App.css'
import {QuotesComponent} from "./Components/QuotesComponent";
import React from 'react';

function App() {
  return (
    <section id='main'>
      <h1>React "Quotes" Generator</h1>
          <QuotesComponent/>
      </section>
  );
}

export default App;
