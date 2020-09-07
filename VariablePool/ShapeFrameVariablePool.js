import CustomVariablePool from "./CustomVariablePool";

export default class ShapeFrameVariablePool extends CustomVariablePool {
  constructor() {
    super();
    this.addOutputs([
      "sides",
      "thick",
      "additive",
      "textured",
      "tex_zoom",
      "tex_ang",
      "x",
      "y",
      "rad",
      "ang",
      "r2",
      "g2",
      "b2",
      "a2",
      "border_r",
      "border_g",
      "border_b",
      "border_a",
    ]);
  }
}
