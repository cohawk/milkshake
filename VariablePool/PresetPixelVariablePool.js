import PresetVariablePool from "./PresetVariablePool";

export default class PresetPixelVariablePool extends PresetVariablePool {
  constructor {
    super();
    this.addOutputs(["x", "y", "rad", "ang"]);
  }
}
