import styles from "./styles.module.scss";
import { useState } from "react";
import BrainfuckInterpreter from "./interpreter";

export default function BrainfuckUI() {
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
    <div id={styles.container}>
      <textarea
        placeholder="write code here"
        value={input}
        onChange={onInputChange}
      />
      <textarea placeholder="output" value={output} readOnly={true} />
      <button onClick={onRunButtonClick}>run</button>
    </div>
  );
}
