/* eslint-disable */
import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

const App = () => (
  <div>
    <Calculator />
    <div className="quotesDiv"> 
      <Quotes />
    </div>
  </div>
);

export default App;
