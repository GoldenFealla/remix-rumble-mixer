import type { AudioTrack } from "./AudioTrack.svelte";

export type AudioTrackList = {
  readonly tracks: AudioTrack[];
  addTrack(at: AudioTrack): void;
  removeTrack(id: number): void;
};

let atl: AudioTrackList | null;

export const getAudioTrackList = (): AudioTrackList => {
  if (!atl) {
    atl = createAudioTrackList();
  }

  return atl;
};

function createAudioTrackList(): AudioTrackList {
  let _tracks: AudioTrack[] = $state([]);

  const addTrack = (audioTrack: AudioTrack) => {
    _tracks.push(audioTrack);
  };

  const removeTrack = (id: number) => {
    _tracks = _tracks.filter((t) => t.id != id);
  };

  return {
    get tracks() {
      return _tracks;
    },
    addTrack,
    removeTrack,
  };
}
