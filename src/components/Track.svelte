<script lang="ts">
  import type { AudioTrack } from "../libs/AudioTrack.svelte";
  import { ListOfTracks } from "../libs/AudioMapper";
  import { getAudioController } from "../libs/AudioController.svelte";

  const { track }: { track: AudioTrack } = $props();

  const controller = getAudioController();

  const handleSelectTrack = (e: EventTarget & HTMLSelectElement) => {
    const name = e.value;
    track.name = name;
    track.Load(controller.UpdateDuration);
  };

  const handleChangeVolume = (e: EventTarget & HTMLInputElement) => {
    const v = parseFloat(e.value);
    track.SetVolume(v);
  };
</script>

<div class="card">
  <select
    class="select select-bordered w-full max-w-xs"
    onchange={(e) => handleSelectTrack(e.currentTarget)}
  >
    <option disabled selected>Select Track</option>
    {#each ListOfTracks as name}
      <option value={name}>{name}</option>
    {/each}
  </select>
  <input
    type="range"
    min="0"
    max="1"
    value="0.2"
    step="0.001"
    class="range"
    oninput={(e) => {
      handleChangeVolume(e.currentTarget);
    }}
  />
</div>
