import React from 'react';
import { CalcProps } from './../../data/types';

const calcData: string[] = [ 
  "7", "8", "9", "AC", 
  "4", "5", "6", "+", 
  "1", "2", "3", "-", 
  "*", "0", "/", "="
]

const Buttons = (props: CalcProps): JSX.Element => {
    const { value, operand, expression, clear } = props;

    return (
          <>
          { calcData.map((item: string) => {
            if (item === "AC") {
              return (
                <button className="all-clear" 
                        onClick = { clear } 
                        title = "ALL CLEAR"
                        key = { item }>
                  { item }
                </button>
              )
            } else if (item === "=") {
              return (
                <button className="expression" 
                        onClick={ expression(value) }
                        title = "RESULT"
                        key = { item }>
                  { item }
                </button>
              )
            } else {
              return (
                <button onClick={ operand(item) }
                        key = { item }>
                  { item }
                </button>
              )
            }
          })}
        </>
    )
}

export default Buttons;