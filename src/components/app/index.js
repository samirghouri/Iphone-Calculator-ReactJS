import React, { useState } from "react";
import Buttons from "../buttons";
import "./app.css";

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState("");
  const [operator, setOperator] = useState("");
  const handleButtonClick = (content) => () => {
    const num = parseFloat(value);
    if (content === "AC") {
      setValue("0");
      return;
    }
    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }
    if (content === "%") {
      setMemory(num / 100);
      setOperator(content);
      setValue("0");
      return;
    }
    if (content === "÷") {
      setMemory(num);
      setOperator(content);
      setValue("0");
      return;
    }
    if (content === "x") {
      setMemory(num);
      setOperator(content);
      setValue("0");
      return;
    }
    if (content === "-") {
      setMemory(num);
      setOperator(content);
      setValue("0");
      return;
    }
    if (content === "+") {
      setMemory(num);
      setOperator(content);
      setValue("0");
      return;
    }
    if (content === "=") {
      if (operator === "+") {
        setValue((memory + num).toString());
        return;
      } else if (operator === "-") {
        setValue((memory - num).toString());
        return;
      } else if (operator === "x") {
        setValue((memory * value).toString());
        return;
      } else if (operator === "÷") {
        setValue((memory / value).toString());
        return;
      } else if (operator === "%") {
        setValue(num * memory);
        return;
      } else {
        return;
      }
    }

    if (content === ".") {
      let newValue = value.concat(".");
      setValue(newValue);
      return;
    }
    if (value.includes(".")) {
      if (value.indexOf(".") === value.length - 1) {
        setValue(value + content);
      }
    } else {
      setValue(num + content);
    }
  };
  return (
    <div className="app">
      <div className="top">09:23</div>
      <div className="display">{value}</div>
      <div className="buttons">
        <Buttons
          onButtonClick={handleButtonClick}
          content="AC"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonClick}
          content="±"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonClick}
          content="%"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonClick}
          content="÷"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonClick} content="7" />
        <Buttons onButtonClick={handleButtonClick} content="8" />
        <Buttons onButtonClick={handleButtonClick} content="9" />
        <Buttons
          onButtonClick={handleButtonClick}
          content="x"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonClick} content="4" />
        <Buttons onButtonClick={handleButtonClick} content="5" />
        <Buttons onButtonClick={handleButtonClick} content="6" />
        <Buttons
          onButtonClick={handleButtonClick}
          content="-"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonClick} content="1" />
        <Buttons onButtonClick={handleButtonClick} content="2" />
        <Buttons onButtonClick={handleButtonClick} content="3" />
        <Buttons
          onButtonClick={handleButtonClick}
          content="+"
          type="operator"
        />
        <Buttons onButtonClick={handleButtonClick} content="0" />
        <Buttons onButtonClick={handleButtonClick} content="." />
        <Buttons
          onButtonClick={handleButtonClick}
          content="="
          type="operator"
        />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default App;
