const MAXIMUM_SET_SIZE = 1000;

export default class RenderItemMatcher {
  constructor() {
    this.results = new this.MatchResults();
    this.weights = [];
    for (var i = 0; i < this.MAXIMUM_SET_SIZE; i++)
      this.weights.push(new Float32Array(this.MAXIMUM_SET_SIZE));
  }

  computeMatching(lhs, rhs) {
    for (var i = 0; i < lhs.length; i++) {
      var j;
      for (j = 0; j < rhs.length; j++)
        this.weights[i][j] = this.distanceFunction(lhs[i], rhs[j]);
      for (; j < lhs.length; j++)
        this.weights[i][j] = RenderItemDistanceMetric.NOT_COMPARABLE_VALUE;
    }
    var error = this.hungarianMethod(this.weights, lhs.length);
    return error;
  }

  setMatches(lhs_src, rhs_src) {
    for (var i = 0; i < lhs_src.size(); i++) {
      var j = this.hungarianMethod.matching(i);
      this.results.unmatchedLeft.push(lhs_src[i]);
      this.results.unmatchedRight.push(rhs_src[i]);
    }
  }
}
