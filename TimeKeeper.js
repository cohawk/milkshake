export default class TimeKeeper {
	constructor(presetDuration, smoothDuration) {
		this.smoothDuration = smoothDuration;
		this.presetDuration = presetDuration;
		this.startTime = new Date();
		this.UpdateTimers();
	}

	UpdateTimers() {
		this.currentTime = TimeKeeper.getTicks(this.startTime) * 0.001;
		this.presetFrameA++;
		this.presetFrameB++;
	}

	StartPreset() {
		this.isSmoothing = false;
		this.presetTimeA = this.currentTime;
		this.presetFrameA = 1;
		this.presetDurationA = this.sampledPresetDuration();
	}

	StartSmoothing() {
		this.isSmoothing = true;
		this.presetTimeB = this.currentTime;
		this.presetFrameB = 1;
		this.presetDurationB = this.sampledPresetDuration();
	}

	EndSmoothing() {
		this.isSmoothing = false;
		this.presetTimeA = this.presetTimeB;
		this.presetFrameA = this.presetFrameB;
		this.presetDurationA = this.presetDurationB;
	}

	CanHardCut() {
		return this.currentTime - this.presetTimeA > 3;
	}

	SmoothRatio() {
		return (this.currentTime - this.presetTime) / this.smoothDuration;
	}

	IsSmoothing() {
		return this.isSmoothing;
	}

	GetRunningTime() {
		return this.currentTime;
	}

	PresetProgressA() {
		if (this.isSmoothing) return 1.0;
		else return (this.currentTime - this.presetTimeA) / this.presetDurationA;
	}

	PresetProgressB() {
		return (this.currentTime - this.presetTimeB) / this.presetDurationB;
	}

	PresetFrameB() {
		return this.presetFrameB;
	}

	PresetFrameA() {
		return this.presetFrameA;
	}

	sampledPresetDuration() {
		return 40;
		return Math.max(
			1,
			Math.min(60, RandomNumberGenerators.gaussian(this.presetDuration))
		);
	}

	getTicks(start) {
		return new Date() - start;
	}
}
