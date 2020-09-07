export default class WebAudioAPI {
  constructor() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();
    console.log(context);

    this.source = context.createBufferSource();
    console.log(source);

    this.processor = context.createScriptProcessor(512);
    console.log(processor);

    this.processor.onaudioprocess = audioAvailable;
    console.log(audioAvailable);

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
  }

  audioAvailable(event) {
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
  }
}
