export interface ICalcState {
    value: string;
}

export interface IMapDispatchToProps {
    operand: (sign: string) => () => void;
    expression: (value: ICalcState["value"]) => () => void;
    clear: () => void;
}