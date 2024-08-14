import React, { useReducer } from "react";

const reducer = (number, newNumber) => number + newNumber; // 일처리 값

function Numbers() {
  const [number, dispatch] = useReducer(reducer, 0); //state 값, 요청한 값

  return <h1 onClick={() => dispatch(1)}>{number}</h1>;
}

export default function Usereducer04() {
  return <Numbers />;
}
