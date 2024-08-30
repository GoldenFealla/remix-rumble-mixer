import { storage } from "../main";
import { ref, getDownloadURL } from "firebase/storage";

import { type AudioMixer } from "./AudioMixer.svelte";
import { getAudioContext } from "./AudioContext.svelte";

import { FILE_MAP, type FileMapKey } from "./AudioMapper";
import { downloadAudioFile } from "../utils/Download";

const context = getAudioContext();

export class AudioTrack {
  public id: number = Date.now();
  public name: string = $state("");
  public duration: number = 0;
  private _l: boolean;
  private _b: AudioBuffer;
  private _n: AudioBufferSourceNode;
  private _g: GainNode;

  constructor(context: AudioContext, mixer: AudioMixer) {
    this._b = context.createBuffer(2, 22050, 44100);
    this._n = context.createBufferSource();
    this._g = context.createGain();
    this._g.connect(mixer.masterGain);
    this._g.gain.value = 0.2;
    this._n.loop = true;
    this._l = false;
  }

  async Load(callback: () => void) {
    if (this.name === "") return;

    const fileName = FILE_MAP[this.name as FileMapKey];
    const fileRef = ref(storage, fileName);

    const url = await getDownloadURL(fileRef);
    downloadAudioFile(context, url, (ab: AudioBuffer) => {
      console.log(`Downloaded ${this.name}`);
      this._b = ab;
      this._n.buffer = this._b;
      this._n.connect(this._g);
      this.duration = this._b.duration;
      this._l = true;
      callback();
    });
  }

  SetVolume(value: number) {
    this._g.gain.value = value;
  }

  Start(when?: number) {
    if (!this._l) return;

    if (!when) {
      this._n.start(0);
      return;
    }

    this._n.start(when);
  }
}
