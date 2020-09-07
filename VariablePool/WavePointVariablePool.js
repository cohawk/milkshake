import CustomVariablePool from "./CustomVariablePool";

export default class WavePointVariablePool extends CustomVariablePool {
  constructor() {
    super();
    this.addOutputs(["x", "y", "sample", "value1", "value2"]);
  }
}
