import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { CalcProps } from './../../data/types';
import { ICalcState, IMapDispatchToProps } from './../../data/interfaces';
import { operand, expression, clear } from './../../actions/actionCreators';
import Buttons from './../Buttons';

class Calc extends Component<CalcProps> {
  render() {
    const { value, operand, expression, clear } = this.props;

    return (
      <div className="calculator">
        <div className="value">
          <p>{ value }</p>
        </div>
        <div className="buttons">
          <Buttons
            value = { value }
            operand = { operand }
            expression = { expression }
            clear = { clear }
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps : (state: ICalcState) => ICalcState = state => {
    return {
      value: state.value
    }
  }
  
const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
      operand: (sign: string) => () => {
        dispatch(operand(sign));
      },
      clear: () => {
        dispatch(clear());
      },
      expression: (value: ICalcState["value"]) => () => {
        dispatch(expression(value));
      }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Calc);