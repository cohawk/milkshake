export default class VariablePool {
  constructor() {
    this.inputs = [];
    this.outputs = [];
    this.addInputs([
      "time",
      "fps",
      "frame",
      "progress",
      "bass",
      "mid",
      "treb",
      "bass_att",
      "mid_att",
      "treb_att",
    ]);
    for (i = 1; i <= 32; i++) this["q" + i] = 0;
  }

  addInputs(ownInputs) {
    for (var i = 0; i < ownInputs.length; i++) {
      this.inputs.push(ownInputs[i]);
      this[ownInputs[i]] = 0;
    }
  }

  addOutputs(ownOutputs) {
    for (var i = 0; i < ownOutputs.length; i++) {
      this.outputs.push(ownOutputs[i]);
      this[ownOutputs[i]] = 0;
    }
  }

  pushQs(array) {
    for (var i = 1; i <= 32; i++) this["q" + i] = array[i - 1];
  }

  popQs(array) {
    for (var i = 1; i <= 32; i++) array[i - 1] = this["q" + i];
  }

  transferQs(pool) {
    for (var i = 1; i <= 32; i++) pool["q" + i] = this["q" + i];
  }

  pushOutputs(pool) {
    for (var i = 0; i < this.outputs.length; i++)
      this[this.outputs[i]] = pool[this.outputs[i]];
  }

  popOutputs(pool) {
    for (var i = 0; i < this.outputs.length; i++)
      pool[this.outputs[i]] = this[this.outputs[i]];
  }

  pushInputs(pool) {
    for (var i = 0; i < this.inputs.length; i++)
      this[this.inputs[i]] = pool[this.inputs[i]];
  }

  cos: Math.cos,
  sin: Math.sin,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  abs: Math.abs,
  pow: Math.pow,
  min: Math.min,
  max: Math.max,
  sqrt: Math.sqrt,
  log: Math.log,

  above(arg1, arg2) {
    return arg1 > arg2;
  }

  below(arg1, arg2) {
    return arg1 < arg2;
  }

  equal(arg1, arg2) {
    return arg1 == arg2;
  }

  ifcond(arg1, arg2, arg3) {
    return arg1 ? arg2 : arg3;
  }

  sign(arg1) {
    return (arg1 > 0) - (arg1 < 0);
  }

  int(arg1) {
    return Math.floor(arg1);
  }

  sqr(arg1) {
    return Math.pow(arg1, 2);
  }

  sigmoid(arg1, arg2) {
    return 65534 / (1 + Math.exp((arg1 * arg2) / -32767) - 32767);
  }

  rand(arg1) {
    return Math.floor(Math.random() * arg1);
  }

  bor(arg1, arg2) {
    return arg1 != 0 || arg2 != 0;
  }

  band(arg1, arg2) {
    return arg1 != 0 && arg2 != 0;
  }

  bnot(arg1) {
    return arg1 == 0 ? 1 : 0;
  }

  exp: Math.exp,
  atan2: Math.atan2,

  log10(arg1) {
    return Math.log(arg1, 10);
  }
}
