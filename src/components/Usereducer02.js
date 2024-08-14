import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  function Toggle() {
    setChecked((checked) => !checked);
  }

  return (
    <>
      <input type="checkbox" value={checked} onChange={Toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default function Usereducer02() {
  return <Checkbox />;
}
