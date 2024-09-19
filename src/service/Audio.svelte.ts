/**
 * This is so fucking hard to read. I'm so sorry
 * TODO: refractor to easier to read
 */
import { storage } from "src/main";
import { FILE_MAP, type FileMapKey } from "./AudioMap";
import { getDownloadURL, ref } from "firebase/storage";
import { downloadAudioFile } from "src/utils/Download";

const context = new AudioContext();

export type AudioTrack = {
  id: number;
  name: string;
  volume: number;
  duration: number;
  isLoaded: boolean;
  play(time: number): void;
  connect(mg: GainNode): void;
  load(): Promise<void>;
};

export function CreateAudioTrack() {
  let _name = $state("");
  let _gain = context.createGain();
  let _ab: AudioBuffer;
  let _isLoaded = false;
  let _absn = context.createBufferSource();

  function connect(mg: GainNode) {
    _gain.connect(mg);
  }

  async function load() {
    if (_name === "") return;

    const fileRef = ref(storage, FILE_MAP[_name as FileMapKey]);
    const url = await getDownloadURL(fileRef);

    _ab = await downloadAudioFile(context, url);
    console.log("downloaded");
    _isLoaded = true;

    return;
  }

  function play(time: number = 0) {
    _absn.disconnect();
    _absn = context.createBufferSource();
    _absn.buffer = _ab;
    _absn.connect(_gain);
    _absn.start(0, time);
  }

  return {
    id: Date.now(),
    get name() {
      return _name;
    },
    set name(n: string) {
      _name = n;
      _isLoaded = false;
    },
    get volume(): number {
      return _gain.gain.value;
    },
    set volume(v: number) {
      _gain.gain.value = v;
    },
    get isLoaded() {
      return _isLoaded;
    },
    get duration() {
      return _ab.duration;
    },
    play,
    connect,
    load,
  };
}

export type Player = {
  readonly tracks: AudioTrack[];
  volume: number;
  currentTime: number;
  readonly isPlaying: boolean;
  readonly isLoading: boolean;
  readonly duration: number;

  Play(): void;
  Seek(time: number): void;

  AddTracK(track: AudioTrack): void;
  RemoveTrack(track: AudioTrack): void;
};

export function CreatePlayer(): Player {
  let _ts = $state<AudioTrack[]>([]);
  let _ct = $state<number>(0);
  let _cti: any | null;
  let _dr = $state<number>(0);
  let _ip = $state<boolean>(false);
  let _il = $state<boolean>(false);
  let _vl = $state<number>(0.2);

  let _mg = context.createGain();
  _mg.connect(context.destination);

  $effect(() => {
    _mg.gain.value = _vl;
  });

  function interval() {
    if (!_cti) {
      _cti = setInterval(() => {
        _ct += 0.1;

        if (_ct >= _dr) {
          clearInterval(_cti);
          _cti = null;
          _ip = false;
        }
      }, 100);
    }
  }

  async function Play() {
    if (context.state === "running") {
      _ip = false;
      await context.suspend();
      return;
    }

    if (_il) return;

    _il = true;
    const notLoaded = _ts.filter((t) => !t.isLoaded);
    await Promise.allSettled([...notLoaded.map((t) => t.load())]);
    _il = false;
    _dr = Math.max(..._ts.map((t) => t.duration));

    if (context.state === "suspended" || context.state === "closed") await context.resume();

    _ts.forEach((t) => t.play(_ct));
    interval();
    _ip = true;
  }

  function Seek(time: number) {
    clearInterval(_cti);
    _cti = null;
    _ct = time;
    _ts.forEach((t) => t.play(_ct));
    interval();
  }

  function AddTracK(track: AudioTrack) {
    _ts = [..._ts, track];
    track.connect(_mg);
  }

  function RemoveTrack(track: AudioTrack) {
    _ts = _ts.filter((t) => t.id != track.id);
  }

  return {
    get tracks() {
      return _ts;
    },
    get volume() {
      return _vl;
    },
    set volume(v: number) {
      _vl = v;
    },
    get duration() {
      return _dr;
    },
    get isPlaying() {
      return _ip;
    },
    get isLoading() {
      return _il;
    },
    get currentTime() {
      return _ct;
    },
    Play,
    Seek,
    AddTracK,
    RemoveTrack,
  };
}
