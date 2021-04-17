import React, { useState, useRef } from 'react';
import { Provider } from './components/context';
import Digit from './components/Digit';
import './App.css';
import Operation from './components/Operations';

function App() {
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');
  const [ops, setOps] = useState('');
  const [res, setRes] = useState('');
  const [focus, setFocus] = useState('');
  const ref1 = useRef();
  const ref2 = useRef();

  const calcResult = () => {
    let v11 = v1 * 1;
    let v22 = v2 * 1;
    switch (ops) {
      case '+':
        setRes(res => v11 + v22);
        break;
      case '-':
        setRes(res => v11 - v22);
        break;
      case 'X':
        setRes(res => v11 * v22);
        break;
      case '/':
        setRes(res => v11 / v22);
        break;
      default:
        setRes(res => res);
    }
    setV1(v1 => '');
    setV2(v2 => '');
    setOps(ops => '');
    setFocus(focus => '');
  };

  const reset = () => {
    setV1(v1 => '');
    setV2(v2 => '');
    setOps(ops => '');
    setRes(res => '');
    setFocus(focus => '');
  };

  const contextValue = {
    setV1: setV1,
    setV2: setV2,
    focus: focus,
    setFocus: setFocus,
    ops: ops,
    setOps: setOps,
    res: calcResult,
    reset: reset
  };

  return (
    <div className="App">
      <h1>CALCY</h1>
      <form onSubmit={e => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <td>
                <label>Result: </label>
              </td>
              <td colSpan="3">
                <input
                  type="text"
                  placeholder={res}
                  ref={ref1}
                  readOnly
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  1<sup>st</sup> Operand:
                </label>
              </td>
              <td colSpan="3">
                <input type="text" placeholder={v1} ref={ref2} readOnly></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  2<sup>nd</sup> Operand:
                </label>
              </td>
              <td colSpan="3">
                <input type="text" placeholder={v2} readOnly></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Operator: </label>
              </td>
              <td colSpan="3">
                <input type="text" placeholder={ops} readOnly></input>
              </td>
            </tr>
          </thead>
          <tbody>
            <Provider value={contextValue}>
              <tr>
                <Operation num="/" rowSpan="1" colSpan="1"></Operation>
                <Operation num="X" rowSpan="1" colSpan="1"></Operation>
                <Operation num="-" rowSpan="1" colSpan="1"></Operation>
                <Operation num="+" rowSpan="1" colSpan="1"></Operation>
              </tr>
              <tr>
                <Digit num="7" rowSpan="1" colSpan="1"></Digit>
                <Digit num="8" rowSpan="1" colSpan="1"></Digit>
                <Digit num="9" rowSpan="1" colSpan="1"></Digit>
                <Operation num="clr" rowSpan="1" colSpan="1"></Operation>
              </tr>
              <tr>
                <Digit num="4" rowSpan="1" colSpan="1"></Digit>
                <Digit num="5" rowSpan="1" colSpan="1"></Digit>
                <Digit num="6" rowSpan="1" colSpan="1"></Digit>
                <Operation num="C" rowSpan="1" colSpan="1"></Operation>
              </tr>
              <tr>
                <Digit num="1" rowSpan="1" colSpan="1"></Digit>
                <Digit num="2" rowSpan="1" colSpan="1"></Digit>
                <Digit num="3" rowSpan="1" colSpan="1"></Digit>
                <Operation num="=" rowSpan="2" colSpan="1"></Operation>
              </tr>
              <tr>
                <Digit num="." rowSpan="1" colSpan="1"></Digit>
                <Digit num="0" rowSpan="1" colSpan="2"></Digit>
              </tr>
            </Provider>
          </tbody>
        </table>
      </form>
      <div id="footer">Created by Deepbaran Kar</div>
    </div>
  );
}

export default App;
