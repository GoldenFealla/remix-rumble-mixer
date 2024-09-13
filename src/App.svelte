<script>
  import "./app.css";

  import { Button } from "$lib/components/ui/button/index.ts";
  import * as Card from "$lib/components/ui/card/index.ts";
  import { ModeWatcher } from "mode-watcher";

  import Mode from "./components/Mode.svelte";
  import Track from "./components/Track.svelte";
  import MediaControl from "./components/MediaControl.svelte";
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
      <div class="my-2"><Track id={1} /></div>
      <div class="my-2"><Track id={2} /></div>
      <div class="my-2"><Track id={3} /></div>
      <div class="my-2"><Track id={4} /></div>
      <div class="my-2"><Track id={5} /></div>
    </Card.Content>
    <Card.Footer>
      <MediaControl />
    </Card.Footer>
  </Card.Root>
</div>
