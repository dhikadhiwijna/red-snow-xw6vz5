import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    const filtered = e.target.value.replace(/\D/g, "");
    setInput(filtered);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const number = parseInt(input) || 0;
    const reverse = parseInt(input.split("").reverse().join("")) || 0;
    setResult(Math.abs(number - reverse));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          Number: <input value={input} onChange={handleInput} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>Result: {result}</div>
    </div>
  );
}
