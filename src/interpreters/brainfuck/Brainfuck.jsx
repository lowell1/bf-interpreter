import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import runCode from "./interpreter";

export default function Brainfuck() {
  const [codeInput, setCodeInput] = useState("");
  const [output, setOutput] = useState("");

  const onRunButtonClick = () => {
    runCode(codeInput, (char) =>
      setOutput((lastOutput) => `${lastOutput}${char}`)
    );
  };
  const onCodeInputChange = (event) => setCodeInput(event.target.value);

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
