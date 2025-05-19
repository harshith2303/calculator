import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
    setTotal(""); // Clear total if user starts typing again
  };

  const handleClear = () => {
    setInput("");
    setTotal("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input);

      if (result === Infinity) {
        setTotal("Infinity");
      } else if (Number.isNaN(result)) {
        setTotal("NaN");
      } else {
        setTotal(result.toString());
      }
    } catch {
      setTotal("Error");
    }
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <p>{total}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") handleClear();
              else if (btn === "=") handleEqual();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


