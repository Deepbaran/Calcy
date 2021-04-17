import React from 'react';
import { Consumer } from './context';

export default function Digit(props) {
  const num = props.num;
  // console.log(num);
  return (
    <Consumer>
      {({ setV1, setV2, focus, setFocus, ops, setOps, res, reset }) => {
        if (focus === '')
          return (
            <td
              rowSpan={props.rowSpan}
              colSpan={props.colSpan}
              onClick={() => setV1(v1 => v1 + num)}
            >
              <h3>{props.num}</h3>
            </td>
          );
        else
          return (
            <td
              rowSpan={props.rowSpan}
              colSpan={props.colSpan}
              onClick={() => setV2(v2 => v2 + num)}
            >
              <h3>{props.num}</h3>
            </td>
          );
      }}
    </Consumer>
  );
}
