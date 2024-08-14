import React, { useReducer } from "react";

const reducer = (checked) => !checked;

function Checkbox() {
  const [checked, dispatch] = useReducer(reducer, false);
  //리턴값 checked: 새로운 값 , dispatch: 요청한 값
  // reducer: 일처리 값 , false: 초깃값
  return (
    <>
      <input type="checkbox" value={checked} onChange={dispatch} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default function Usereducer03() {
  return <Checkbox />;
}
