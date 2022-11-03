export default class BrainfuckInterpreter {
  // // array of "memory locations" on which to operate
  #memory = [0];
  #memoryPointer = 0;
  // #output = "";
  #instructionPointer = 0;
  #instructions = "";
  // execution stopped because it's waiting for input from user
  #isAwaitingInput = false;
  #addToOutput = null;

  constructor(instructions, addToOutput) {
    console.log({ instructions });
    this.#instructions = instructions;
    this.#addToOutput = addToOutput;
  }

  get memory() {
    return this.#memory;
  }

  get instructionPointer() {
    return this.#instructionPointer;
  }

  // get output() {
  //   return this.#output;
  // }

  get memoryPointer() {
    return this.#memoryPointer;
  }

  // set value at current memory location to ascii code from user and continue execution
  // resumeWithInput(input) {
  //   // only 1 char!
  //   this.#memory[this.#memoryPointer] = input.charCodeAt(0);
  //   this.run();
  // }

  run() {
    // indexes of open brackets in bf code
    const bracketIndexStack = [];

    while (
      this.#instructionPointer < this.#instructions.length &&
      !this.#isAwaitingInput
    ) {
      switch (this.#instructions[this.#instructionPointer]) {
        case ">":
          // add new "memory location" to memory array if memoryPointer is at end
          if (this.#memoryPointer === this.#memory.length - 1)
            this.#memory.push(0);

          this.#memoryPointer++;
          break;

        case "<":
          if (this.#memoryPointer > 0) this.#memoryPointer--;
          break;

        case "+":
          this.#memory[this.#memoryPointer]++;
          break;

        case "-":
          this.#memory[this.#memoryPointer]--;
          break;

        case ".":
          this.#addToOutput(
            String.fromCharCode(this.#memory[this.#memoryPointer])
          );
          // this.#output += String.fromCharCode(
          //   this.#memory[this.#memoryPointer]
          // );

          break;

        case ",":
          this.#isAwaitingInput = true;
          break;

        case "[":
          bracketIndexStack.push(this.#instructionPointer);
          break;

        // if the value in #memory array at index #memoryPointer is 0 pop the last bracket from the stack and proceed
        // otherwise go back to first instruction after the last open bracket
        case "]":
          if (this.#memory[this.#memoryPointer] === 0) bracketIndexStack.pop();
          else {
            this.#instructionPointer =
              bracketIndexStack[bracketIndexStack.length - 1] + 1;
            continue;
          }
          break;
        default:
          break;
      }

      this.#instructionPointer++;
    }
  }
}
