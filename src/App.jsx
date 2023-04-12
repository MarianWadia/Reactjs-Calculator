import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [calc, setCalc] = useState('');
  const operators = ['+', '-', '*', '/', '.' ];

  const updateDisplay=(value)=>{
    if(
      // the first means that an operator is pressed alone 
      (operators.includes(value) && calc === '' ) ||
      // here means that the operator is found and it is the last thing typed
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ){
      return;
    }
    setCalc(calc + value);
    if(!operators.includes(value)){
      // eslint-disable-next-line no-eval
      setResult(eval(calc  + value).toString());
    }
  }

  const PrintResult = () =>{
    setCalc(result);
  }

  const clearDisplay = () =>{
    setCalc('');
    setResult('');
  }
  const clearLast = () =>{
    setCalc(calc.slice(0, -1));
    if(calc.length<=1){
      setResult('');
    }
  }

  const digits = [];

  const createDigits = () => {
    for(let i = 1; i <10 ; i++) {
      digits.push(i);
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp;
          {calc || 0}
        </div>
          <div className="operators">
            <button onClick={() => updateDisplay("/")}>/</button>
            <button onClick={() => updateDisplay("*")}>*</button>
            <button onClick={() => updateDisplay("+")}>+</button>
            <button onClick={() => updateDisplay("-")}>-</button>
            <button onClick={clearLast}>DEL</button>
            <button onClick={clearDisplay}>All</button>
          </div>
          <div className="digits">
              {createDigits().map((digit, index)=>{
                return <button key={index} onClick={() => updateDisplay(digit)}>{digit}</button>;
              })} 
              <button onClick={() => updateDisplay("0")}>0</button>
              <button onClick={() => updateDisplay(".")}>.</button>
              <button onClick={PrintResult}>=</button>
            </div>  
      </div>
    </div>
  );
}

export default App;
