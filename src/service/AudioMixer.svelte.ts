import { getAudioContext } from "./AudioContext.svelte";

const context = getAudioContext();

export type AudioMixer = {
  masterGain: GainNode;
  setVolume(value: number): void;
};

let m: AudioMixer | null = null;

function createAudioMixer(): AudioMixer {
  // This is the Master Gain Node for control overal volume
  const _mg = context.createGain();
  _mg.gain.value = 1;
  _mg.connect(context.destination);

  const setVolume = (volume: number) => {
    if (volume < 0 || volume > 1) {
      console.log("the value must be between 0 and 1");
      return;
    }

    _mg.gain.value = volume;
  };

  return {
    masterGain: _mg,
    setVolume,
  };
}

export const getAudioMixer = () => {
  if (!m) {
    m = createAudioMixer();
  }

  return m;
};
