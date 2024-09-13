let c: AudioContext | null = null;

export const getAudioContext = () => {
  if (!c) {
    c = new AudioContext();
  }
  return c;
};
