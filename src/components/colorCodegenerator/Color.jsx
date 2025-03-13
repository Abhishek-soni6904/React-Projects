import React, { useState } from "react";
import "./color.css";

function Color() {
  const [mode, setMode] = useState(true);
  const [color, setColor] = useState("");
  const generateColor = () => {
    if (mode) {
      const hexString = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hexString[Math.floor(Math.random() * 16)];
      }
      setColor(color);
    } else {
      const rgbValues = new Array(3);
      for (let i = 0; i < 3; i++) {
        rgbValues[i] = Math.floor(Math.random() * 256);
      }
      setColor(`rgb(${rgbValues.join()})`);
    }
  };
  return (
    <section
      style={{ backgroundColor: color }}
      className="wrapper"
      id="colorWrapper"
    >
      <div className="buttonWrapper">
        <button onClick={() => setMode(!mode)}>
          Toggle to {mode ? "Rgb mode" : "Hex mode"}
        </button>
        <button onClick={generateColor}>Generate Color</button>
      </div>
      <h2>{mode ? "Hex code" : "Rgb code"}</h2>
      <h3>{color === "" ? "Click Generate button" : color}</h3>
    </section>
  );
}

export default Color;
