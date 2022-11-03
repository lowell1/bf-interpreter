import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import BrainfuckInterpreter from "./interpreter";

export default function BrainfuckUI() {
  const [codeInput, setCodeInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const onKeyPress = (event) => {
      console.log(event);
    };
    document.body.addEventListener("keypress", onKeyPress);

    return () => {
      document.body.removeEventListener("keypress", onKeyPress);
    };
  }, []);

  function addToOutput(char) {
    setOutput((lastOutput) => lastOutput + char);
  }

  function onCodeInputChange(event) {
    setCodeInput(event.target.value);
  }

  function onRunButtonClick() {
    const interpreter = new BrainfuckInterpreter(codeInput, addToOutput);
    interpreter.run();
    // setOutput(interpreter.output);
  }

  return (
    <div id={styles.container}>
      <textarea
        placeholder="write code here"
        value={codeInput}
        onChange={onCodeInputChange}
      />
      <textarea placeholder="output" value={output} readOnly={true}></textarea>
      <button onClick={onRunButtonClick}>run</button>
    </div>
  );
}
