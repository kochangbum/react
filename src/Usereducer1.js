import React, { useReducer, useState } from "react";

// const ACTION_TYPES = {
//   plus: "deposit",
//   minus: "withdraw",
// };

const reducer = (state, action) => {
  console.log("reudcer가 일을 하네요", state, action);
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default function Usereducer1() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영홥니다</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number }); // action 값으로 넘어감 챗에게 물어보자
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}
