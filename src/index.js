import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  // Array Destructuring Syntax
  const [isLit, setLit] = useState(false);
  /* same as below
      const state = React.useState(true);
      const isLit = state[0];
      const setLit = state[1];
  */

  const brightness = isLit ? "lit" : "dark";

  // Add another piece of state for room temperature
  const [temperature, setTemperature] = useState(72);

  return (
    <div className={`room ${brightness}`}>
      {/* same as  classNAme={`room ${isLit ? "Lit" : "dark"}`} */}
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
      <button onClick={() => setLit(true)}>On</button>
      <button onClick={() => setLit(false)}>Off</button>
      <br />
      <br />
      the room temperature is {temperature} farenheit
      <br />
      <button onClick={() => setTemperature(temperature + 1)}>+</button>
      <button onClick={() => setTemperature(temperature - 1)}>-</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector("#root"));
