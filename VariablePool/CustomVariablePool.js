import VariablePool from "./VariablePool";

export default class CustomVariablePool extends VariablePool {
  constructor() {
    super();
    this.addOutputs(["r", "g", "b", "a"]);
    for (var i = 1; i <= 8; i++) this["t" + i] = 0;
  }

  pushTs(array) {
    for (var i = 1; i <= 8; i++) this["t" + i] = array[i - 1];
  }

  popTs(array) {
    for (var i = 1; i <= 8; i++) array[i - 1] = this["t" + i];
  }

  transferTs(pool) {
    for (var i = 1; i <= 8; i++) pool["t" + i] = this["t" + i];
  }
}
