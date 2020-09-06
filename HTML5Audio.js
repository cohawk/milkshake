var HTML5Audio = Class.extend({
  init: function () {
    this.context = null;
    this.source = null;
    this.audioAPI = new WebAudioAPI();
  },
});

var WebAudioAPI = Class.extend({
  init: function () {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();
    console.log(this.context);

    this.source = this.context.createBufferSource();
    console.log(this.source);

    this.processor = this.context.createScriptProcessor(512);
    console.log(this.processor);

    this.processor.onaudioprocess = this.audioAvailable;
    console.log(this.audioAvailable);

    this.source.connect(this.processor);
    this.processor.connect(this.context.destination);

    var request = new XMLHttpRequest();
    request.open("GET", "song.ogg", true);
    request.responseType = "arraybuffer";
    request.onload = function () {
      var audioData = request.response;

      this.context.decodeAudioData(audioData).then(function (decodedData) {
        // use the decoded data here
        this.source.buffer = decodedData;
        this.source.loop = true;
        this.source.start(0);
      });
    };
    request.send();
  },

  audioAvailable: function (event) {
    var inputArrayL = event.inputBuffer.getChannelData(0);
    var inputArrayR = event.inputBuffer.getChannelData(1);
    var outputArrayL = event.outputBuffer.getChannelData(0);
    var outputArrayR = event.outputBuffer.getChannelData(1);
    var n = inputArrayL.length;

    for (var i = 0; i < n; ++i) {
      outputArrayL[i] = inputArrayL[i];
      outputArrayR[i] = inputArrayR[i];
    }

    if (typeof shaker != "undefined")
      shaker.music.addPCM(inputArrayL, inputArrayR);
  },
});
