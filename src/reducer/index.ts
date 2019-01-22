import { ICalcState } from './../data/interfaces';
import { OPERAND, EXPRESSION, CLEAR } from '../actions/actionTypes';

interface IAction {
    type: string;
    sign: string;
    value: string;
}

const initialState: ICalcState = {
    value: '0'
}

const calcReducer = (state = initialState, action: IAction) => {
    switch(action.type){
        case OPERAND:
            return {
                ...state,
                value: state.value === '0' 
                ? action.sign 
                : state.value + action.sign
            }
        case EXPRESSION:
        return {
            ...state,
            // eslint-disable-next-line
            value: eval(action.value)
        }
        case CLEAR:
            return {
                ...state,
                value: '0'
            }
        default:
            return state;
    }
}

export default calcReducer;