export default class RenderItem {
  constructor(literal) {
    this.masterAlpha = 1.0;
    for (var prop in literal) this[prop] = literal[prop];
  }

  Draw() {}
}
