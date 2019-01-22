import { OPERAND, EXPRESSION, CLEAR } from './actionTypes';

export const operand = (sign: string) => {
  return {
    type: OPERAND,
    sign
  }
};

export const expression = (value: string) => {
  return {
    type: EXPRESSION,
    value
  }
};

export const clear = () => {
  return {
    type: CLEAR
  }
};
