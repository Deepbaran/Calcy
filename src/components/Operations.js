import React from 'react';
import { Consumer } from './context';

export default function Operation(props) {
  const num = props.num;
  // console.log(num);
  return (
    <Consumer>
      {({ setV1, setV2, focus, setFocus, ops, setOps, res, reset }) => {
        if (num === '=') {
          return (
            <td
              rowSpan={props.rowSpan}
              colSpan={props.colSpan}
              onClick={res}
              style={{ background: 'orangered' }}
            >
              <h3>{props.num}</h3>
            </td>
          );
        } else if (num === 'C') {
          return (
            <td rowSpan={props.rowSpan} colSpan={props.colSpan} onClick={reset}>
              <h3>{props.num}</h3>
            </td>
          );
        } else if (num === 'clr') {
          if (focus === '')
            return (
              <td
                rowSpan={props.rowSpan}
                colSpan={props.colSpan}
                onClick={() => setV1(v1 => v1.slice(0, v1.length - 1))}
              >
                <h3>{props.num}</h3>
              </td>
            );
          else
            return (
              <td
                rowSpan={props.rowSpan}
                colSpan={props.colSpan}
                onClick={() => setV2(v2 => v2.slice(0, v2.length - 1))}
              >
                <h3>{props.num}</h3>
              </td>
            );
        } else {
          if (ops !== '') setFocus(focus => '1');
          return (
            <td
              rowSpan={props.rowSpan}
              colSpan={props.colSpan}
              onClick={() => setOps(ops => num)}
            >
              <h3>{props.num}</h3>
            </td>
          );
        }
      }}
    </Consumer>
  );
}
