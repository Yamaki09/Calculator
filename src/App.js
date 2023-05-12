import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  let [result, setResult] = useState('0');
  let [number, setNumber] = useState('0');
  let [operator, setOperator] = useState('');
  const [isCalculate, setIsCalculate] = useState(false);

  const methods = {
    add: (a, b) => {
      return Number(a) + Number(b);
    },
    subtract: (a, b) => {
      return Number(a) - Number(b);
    },
    multiply: (a, b) => {
      return Number(a) * Number(b);
    },
    divide: (a, b) => {
      return Number(a) / Number(b);
    },
  };

  const showSecondInput = () => {
    if (!isCalculate) {
      return <h4>{result}</h4>;
    } else {
      return <h4>{number}</h4>;
    }
  };
  return (
    <>
      <div id="calculator">
        <div id="head">{showSecondInput()}</div>
        <div id="body">
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('7');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 7));
              }
              if (number === '0' && isCalculate) {
                setNumber('7');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 7));
              }
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('8');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 8));
              }
              if (number === '0' && isCalculate) {
                setNumber('8');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 8));
              }
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('9');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 9));
              }
              if (number === '0' && isCalculate) {
                setNumber('9');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 9));
              }
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              setIsCalculate(true);
              setOperator('/');
            }}
          >
            /
          </button>
          <br />
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('4');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 4));
              }
              if (number === '0' && isCalculate) {
                setNumber('4');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 4));
              }
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('5');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 5));
              }
              if (number === '0' && isCalculate) {
                setNumber('5');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 5));
              }
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('6');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 6));
              }
              if (number === '0' && isCalculate) {
                setNumber('6');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 6));
              }
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setIsCalculate(true);
              setOperator('*');
            }}
          >
            *
          </button>
          <br />
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('1');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 1));
              }
              if (number === '0' && isCalculate) {
                setNumber('1');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 1));
              }
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('2');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 2));
              }
              if (number === '0' && isCalculate) {
                setNumber('2');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 2));
              }
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('3');
              } else if (result !== '0' && !isCalculate) {
                setResult((result += 3));
              }
              if (number === '0' && isCalculate) {
                setNumber('3');
              } else if (number !== '0' && isCalculate) {
                setNumber((number += 3));
              }
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setIsCalculate(true);
              setOperator('-');
            }}
          >
            -
          </button>
          <br />
          <button
            onClick={() => {
              // should not be able to add more 0 from start
              if (result === '0' && !isCalculate) {
                alert('default number is 0');
              }
              if (number === '0' && isCalculate) {
                alert('default number is 0');
              }

              if (result !== '0' && !isCalculate) {
                setResult((result += 7));
              }

              if (number !== '0' && isCalculate) {
                setNumber((number += 7));
              }
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              if (result === '0' && !isCalculate) {
                setResult('0.');
              } else if (result.length > 1 && !isCalculate) {
                setResult((result += '.'));
              }

              if (isCalculate) {
                if (number === '0') {
                  setNumber('0.');
                } else {
                  setNumber((number += '.'));
                }
              }
              // need to stop 2 decimal points
              //   for (const char of result) {
              //     if (char === '.') {
              //       alert("you can't have 2 decimal places. Please try again");
              //       setResult('0');
              //     }
              //   }
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              setIsCalculate(true);
              setOperator('+');
            }}
          >
            +
          </button>

          <button
            onClick={() => {
              if (operator === '+') {
                setResult(methods.add(result, number));
                setIsCalculate(false);
                setNumber('0');
              } else if (operator === '-') {
                setResult(methods.subtract(result, number));
                setIsCalculate(false);
                setNumber('0');
              } else if (operator === '*') {
                setResult(methods.multiply(result, number));
                setIsCalculate(false);
                setNumber('0');
              } else if (operator === '/') {
                setResult(methods.divide(result, number));
                setIsCalculate(false);
                setNumber('0');
              }
            }}
          >
            =
          </button>
          <button
            onClick={() => {
              setResult('0');
              setNumber('0');
              setIsCalculate(false);
            }}
          >
            C
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
