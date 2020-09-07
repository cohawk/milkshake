export default class Filter extends RenderItem {
  constructor(literal) {
    super(literal);
    this.points = new Float32Array([
      -0.5,
      -0.5,
      -0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      -0.5,
    ]);
    this.pointsbuf = gl.createBuffer();
  }
}
