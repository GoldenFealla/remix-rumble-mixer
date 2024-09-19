<script lang="ts">
  // Play Button Icon
  import Play from "lucide-svelte/icons/play";
  import LoaderCircle from "lucide-svelte/icons/loader-circle";
  import Pause from "lucide-svelte/icons/pause";

  // Volume Icon
  import VolumeOff from "lucide-svelte/icons/volume-off";
  import Volume from "lucide-svelte/icons/volume";
  import Volume1 from "lucide-svelte/icons/volume-1";
  import Volume2 from "lucide-svelte/icons/volume-2";

  // UI
  import { Slider } from "$lib/components/ui/slider/index.ts";
  import { Button } from "$lib/components/ui/button/index.ts";
  import type { Player } from "$service/Audio.svelte";
  import { formatSecond } from "src/utils/Time";

  const { player }: { player: Player } = $props();

  let drag = $state(false);

  const handleOnSeeking = (e: number[]) => {
    if (!drag) return;
    const time = e[0];
    console.log(time);
    player.Seek(time);
  };

  const handleOnChangePlaying = () => {
    player.Play();
  };

  const handleOnChangeVolume = (e: number[]) => {
    const v = e[0] / 100;
    player.volume = v;
  };
</script>

<span class="w-full flex flex-col items-center px-2">
  <Slider
    min={0}
    max={player.duration}
    step={0.1}
    value={[player.currentTime]}
    onValueChange={(e) => handleOnSeeking(e)}
    ondrag={() => {
      drag = true;
    }}
    ondragend={() => {
      drag = false;
    }}
  />
  <div class="flex flex-row w-full justify-between items-center mt-5">
    <span class="w-[180px]">
      {formatSecond(player.currentTime)}/{formatSecond(player.duration)}
    </span>
    <Button size="icon" onclick={handleOnChangePlaying} disabled={player.isLoading}>
      {#if player.isLoading}
        <LoaderCircle class="spinner" />
      {:else if player.isPlaying}
        <Pause class="h-5 w-5" />
      {:else}
        <Play class="h-5 w-5" />
      {/if}
    </Button>
    <span class="w-[180px]">
      <span class="flex flex-row items-center">
        <span class="mr-5">
          {#if player.volume == 0}
            <VolumeOff />
          {:else if player.volume <= 0.3}
            <Volume />
          {:else if player.volume <= 0.7}
            <Volume1 />
          {:else}
            <Volume2 />
          {/if}
        </span>
        <Slider
          min={0}
          max={100}
          step={1}
          value={[20]}
          onValueChange={(e) => handleOnChangeVolume(e)}
        />
      </span>
    </span>
  </div>
</span>
