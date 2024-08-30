export const downloadAudioFile = (
  context: AudioContext,
  url: string,
  callback: (ab: AudioBuffer) => any
): void => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.responseType = "blob";

  xhr.onload = async function () {
    if (this.status !== 200) return;
    const blob = xhr.response;
    const arrayBuffer = await blob.arrayBuffer();
    const audioBuffer = await context.decodeAudioData(arrayBuffer);
    callback(audioBuffer);
  };

  xhr.send();
};
