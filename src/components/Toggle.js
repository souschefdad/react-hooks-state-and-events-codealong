import React, { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false);

  function toggleSwitch() {
    setIsOn((isOn) = !isOn);
    console.log(isOn)
}

const color = isOn ? "red" : "white";

  return <button style = {{background: color}}onClick={toggleSwitch}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
