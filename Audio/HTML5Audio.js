import WebAudioAPI from "./WebAudioAPI";

export default class HTML5Audio {
  constructor() {
    this.context = null;
    this.source = null;
    this.audioAPI = new WebAudioAPI();
  }
}
