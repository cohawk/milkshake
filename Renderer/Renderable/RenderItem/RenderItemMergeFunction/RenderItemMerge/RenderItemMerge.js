import RenderItemMergeFunction from "../RenderItemMergeFunction";

export default class RenderItemMerge extends RenderItemMergeFunction {
  constructor {}

  supported() {
    return false;
  }

  typeIdPair() {
    return ["", ""];
  }
}
