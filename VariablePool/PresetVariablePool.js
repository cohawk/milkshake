import VariablePool from "./VariablePool";

export default class PresetVariablePool extends VariablePool {
  constructor() {
    super();
    this.addOutputs([
      "zoom",
      "zoomexp",
      "rot",
      "warp",
      "cx",
      "cy",
      "dx",
      "dy",
      "sx",
      "sy",
    ]);
    this.addInputs(["meshx", "meshy", "aspectx", "aspecty"]);
  }
}
