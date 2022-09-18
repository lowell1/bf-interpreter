import "./app.css";
import { useState } from "react";
import BrainfuckInterpreter from "./interpreters/brainfuck";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onRunButtonClick() {
    const interpreter = new BrainfuckInterpreter(input);
    interpreter.run();
    setOutput(interpreter.output);
  }

  return (
    <div id="app">
      <textarea
        placeholder="write code here"
        value={input}
        onChange={onInputChange}
      />
      <textarea placeholder="output" value={output} />
      <button onClick={onRunButtonClick}>run</button>
    </div>
  );
}
