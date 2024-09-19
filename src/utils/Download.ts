export const downloadAudioFile = async (
  context: AudioContext,
  url: string
): Promise<AudioBuffer> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.responseType = "blob";

    xhr.onload = async function () {
      if (this.status !== 200) return;
      const blob = xhr.response;
      const arrayBuffer = await blob.arrayBuffer();
      const audioBuffer = await context.decodeAudioData(arrayBuffer);
      resolve(audioBuffer);
    };

    xhr.onerror = function () {
      reject("error download file");
    };

    xhr.send();
  });
};
