export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export function Increment(){
    return { type: INCREMENT };
}

export const Decrement = () => ({ type : DECREMENT });

export function Reset(){
    return { type : RESET };
}