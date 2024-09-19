<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.ts";
  import * as Select from "$lib/components/ui/select/index.ts";
  import { Slider } from "$lib/components/ui/slider/index.ts";
  import { Label } from "$lib/components/ui/label/index.ts";
  import { Input } from "$lib/components/ui/input/index.ts";

  import { ListOfTracks } from "$service/AudioMap";
  import type { AudioTrack } from "$service/Audio.svelte";

  const {
    track = $bindable(),
    index,
    isPlaying,
  }: { track: AudioTrack; index: number; isPlaying: boolean } = $props();

  let search = $state("");

  const matchName = (t: string) => t.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1;
  let filtered = $derived(ListOfTracks.filter(matchName));

  function handleOnSearch(e: EventTarget & HTMLInputElement) {
    search = e.value;
  }

  function handleOnSelection(e: EventTarget & HTMLInputElement) {
    track.name = e.value;
  }

  function handleOnChangeVolume(e: number[]) {
    const v = e[0] / 100;
    track.volume = v;
  }
</script>

<Card.Root>
  <Card.Header class="py-2">
    <Card.Title tag="h2">
      <span class="flex flex-row items-center justify-between">
        Track {index} :
        <Select.Root portal={null} disabled={isPlaying}>
          <Select.Trigger class="w-[350px]">
            <Select.Value placeholder="Select a track" />
          </Select.Trigger>
          <Select.Content>
            <Input
              type="text"
              placeholder="Search"
              class="w-full pl-7"
              oninput={(e) => handleOnSearch(e.currentTarget)}
            />
            <Select.Group>
              <div class="hide-scroll overflow-auto max-h-56">
                <Select.Item value="" label={"Not selected"}>Not selected</Select.Item>
                {#each filtered as trackName}
                  <Select.Item value={trackName} label={trackName}>{trackName}</Select.Item>
                {/each}
              </div>
            </Select.Group>
          </Select.Content>
          <Select.Input onchange={(e) => handleOnSelection(e.currentTarget)} />
        </Select.Root>
      </span>
    </Card.Title>
  </Card.Header>
  <Card.Content class="pb-5">
    <span class="flex flex-row items-center justify-between">
      <Label class="mr-20">Volume:</Label>
      <Slider
        min={0}
        max={100}
        step={1}
        value={[100]}
        onValueChange={(e) => handleOnChangeVolume(e)}
      />
    </span>
  </Card.Content>
</Card.Root>
