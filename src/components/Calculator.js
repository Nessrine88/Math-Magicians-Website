import React, { useState } from 'react';
import Operations from './operations';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    const newState = calculate(calculatorState, value.toString());
    setCalculatorState(newState);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="TaHeader" colSpan={4}>
              <Operations calculatorState={calculatorState} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={() => handleClick('AC')}>AC</td>
            <td onClick={() => handleClick('+/-')}>+/-</td>
            <td onClick={() => handleClick('%')}>%</td>
            <td onClick={() => handleClick('÷')}>÷</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(7)}>7</td>
            <td onClick={() => handleClick(8)}>8</td>
            <td onClick={() => handleClick(9)}>9</td>
            <td onClick={() => handleClick('x')}>x</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(4)}>4</td>
            <td onClick={() => handleClick(5)}>5</td>
            <td onClick={() => handleClick(6)}>6</td>
            <td onClick={() => handleClick('-')}>-</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(1)}>1</td>
            <td onClick={() => handleClick(2)}>2</td>
            <td onClick={() => handleClick(3)}>3</td>
            <td onClick={() => handleClick('+')}>+</td>
          </tr>
          <tr>
            <td colSpan={2} onClick={() => handleClick(0)}>0</td>
            <td onClick={() => handleClick('.')}>.</td>
            <td className="equalCell" onClick={() => handleClick('=')}>=</td>
          </tr>
        </tbody>
      </table>

    </div>

  );
};

export default Calculator;
