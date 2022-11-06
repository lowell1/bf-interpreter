export default function runCode(code, printChar) {
  // indexes of open brackets in bf code
  const bracketIndexStack = [];
  let instructionPointer = 0;
  let memory = [0];
  let memoryPointer = 0;

  while (instructionPointer < code.length) {
    console.log(1);
    switch (code[instructionPointer]) {
      case ">":
        // add new "memory location" to memory array if memoryPointer is at end
        if (memoryPointer === memory.length - 1) memory.push(0);

        memoryPointer++;
        break;

      case "<":
        if (memoryPointer > 0) memoryPointer--;
        break;

      case "+":
        memory[memoryPointer]++;
        break;

      case "-":
        memory[memoryPointer]--;
        break;

      case ".":
        // addToOutput(String.fromCharCode(memory[memoryPointer]));
        printChar(String.fromCharCode(memory[memoryPointer]));
        break; //   switch (code[instructionPointer]) {

      // case ",":
      //   isAwaitingInput = true;
      //   break;

      case "[":
        bracketIndexStack.push(instructionPointer);
        break;

      // if the value in #memory array at index #memoryPointer is 0 pop the last bracket from the stack and proceed
      // otherwise go back to first instruction after the last open bracket
      case "]":
        if (memory[memoryPointer] === 0) bracketIndexStack.pop();
        else {
          instructionPointer =
            bracketIndexStack[bracketIndexStack.length - 1] + 1;
          continue;
        }
        break;
      default:
        break;
    }

    instructionPointer++;
  }
}
