import RenderItemMerge from "./RenderItemMerge";

export default class MasterRenderItemMerge extends RenderItemMerge {
  constructor() {
    this.mergeFunctionMap = {};
  }

  add(fun) {
    this.mergeFunctionMap[fun.typeIdPair()] = fun;
  }
}
