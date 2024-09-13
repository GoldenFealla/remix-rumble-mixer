import { getAudioContext } from "./AudioContext.svelte";
import { getAudioMixer } from "./AudioMixer.svelte";
import { getAudioTrackList } from "./AudioTrackList.svelte";

const context = getAudioContext();
const mixer = getAudioMixer();
const list = getAudioTrackList();

export type AudioController = {
  readonly duration: number;
  SetVolume(value: number): void;
  Start(): void;
  Seek(value: number): void;
  UpdateDuration(): void;
};

let co: AudioController | null = null;

export const getAudioController = () => {
  if (!co) {
    co = createController();
  }

  return co;
};

const createController = (): AudioController => {
  let _duration = $state(0);

  const Start = async () => {
    if (context.state === "suspended") {
      await context.resume();
    }

    const tracks = list.tracks;
    tracks.forEach((t) => t.Start());
  };

  const Seek = (value: number) => {
    const tracks = list.tracks;
    tracks.forEach((t) => t.Start(value));
  };

  const SetVolume = (value: number) => {
    mixer.masterGain.gain.value = value;
  };

  const UpdateDuration = () => {
    const d = Math.max(...list.tracks.map((t) => t.duration));
    _duration = d;
  };

  return {
    get duration() {
      return _duration;
    },
    SetVolume,
    Start,
    Seek,
    UpdateDuration,
  };
};
