<script lang="ts">
  import "./app.css";

  // externam component
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Card from "$lib/components/ui/card/index.ts";
  import { ModeWatcher } from "mode-watcher";

  // internal component
  import Mode from "./components/Mode.svelte";
  import Track from "./components/Track.svelte";
  import MediaControl from "./components/MediaControl.svelte";

  // Audio
  import { CreateAudioTrack, CreatePlayer } from "$service/Audio.svelte";

  const player = CreatePlayer();

  function handleOnAddTrack() {
    const t = CreateAudioTrack();
    player.AddTracK(t);
  }
</script>

<ModeWatcher></ModeWatcher>

<div class="w-full h-full flex items-center justify-center">
  <Card.Root class="w-[750px]">
    <Card.Header>
      <Card.Title tag="h1">
        <span class="flex flex-row items-center justify-between">
          Remix Rumble Mixer
          <Mode />
        </span>
      </Card.Title>
    </Card.Header>
    <Card.Content>
      <div class="flex flex-col items-center max-h-96 overflow-auto hide-scroll">
        {#each player.tracks as _, index}
          <div class="w-full my-2">
            <Track
              bind:track={player.tracks[index]}
              index={index + 1}
              isPlaying={player.isPlaying}
            />
          </div>
        {/each}
      </div>
      <div class="flex justify-center mt-2">
        <Button onclick={handleOnAddTrack}>Add Track</Button>
      </div>
    </Card.Content>
    <Card.Footer>
      <MediaControl {player} />
    </Card.Footer>
  </Card.Root>
</div>
