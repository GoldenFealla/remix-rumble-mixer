<script>
  import Track from "./Track.svelte";

  import { AudioTrack } from "../libs/AudioTrack.svelte";
  import { getAudioContext } from "../libs/AudioContext.svelte";
  import { getAudioMixer } from "../libs/AudioMixer.svelte";
  import { getAudioTrackList } from "../libs/AudioTrackList.svelte";

  const context = getAudioContext();
  const mixer = getAudioMixer();

  let lists = getAudioTrackList();

  const handleOnAddTrack = () => {
    const audioTrack = new AudioTrack(context, mixer);
    lists.addTrack(audioTrack);
  };
</script>

<div>
  {#each lists.tracks as track}
    <Track {track} />
  {/each}
  <button class="btn" onclick={handleOnAddTrack} disabled={lists.tracks.length >= 5}>
    Add track
  </button>
</div>
