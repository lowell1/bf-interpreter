export default class BrainfuckInterpreter {
  // // array of "memory locations" on which to operate
  #memory = [0];
  #memoryPointer = 0;
  #output = "";
  #instructionPointer = 0;
  #instructions = "";

  constructor(instructions) {
    this.#instructions = instructions;
  }

  get memory() {
    return this.#memory;
  }

  get instructionPointer() {
    return this.#instructionPointer;
  }

  get output() {
    return this.#output;
  }

  get memoryPointer() {
    return this.#memoryPointer;
  }

  execute() {
    // const memory = [0];
    // var memoryPointer = 0;
    // var output = "";
    // var instructionPointer = 0;

    while (this.#instructionPointer < this.#instructions.length) {
      console.log;
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
      }

      this.#instructionPointer++;
    }
  }
}
