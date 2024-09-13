<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.ts";
  import * as Select from "$lib/components/ui/select/index.ts";
  import { Slider } from "$lib/components/ui/slider/index.ts";
  import { Label } from "$lib/components/ui/label/index.ts";
  import { Input } from "$lib/components/ui/input/index.ts";

  import { ListOfTracks, FILE_MAP, type FileMapKey } from "$service/AudioMapper";

  const { id } = $props();

  let search = $state("")

  let filtered = $derived(ListOfTracks.filter(t => t.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1))

  function handleOnSearch(e: EventTarget & HTMLInputElement) {
    search = e.value
  }

  function handleOnSelection(e: EventTarget & HTMLInputElement) {
    console.log(e.value);
  }

</script>

<Card.Root>
  <Card.Header class="py-2">
    <Card.Title tag="h2" >
      <span class="flex flex-row items-center justify-between">
        Track:
        <Select.Root portal={null}>
          <Select.Trigger class="w-[350px]" >
            <Select.Value placeholder="Select a track"   />
          </Select.Trigger>
          <Select.Content >
            <Input type="text" placeholder="Search" class="w-full pl-7" oninput={(e) => handleOnSearch(e.currentTarget)}/>
            <Select.Group>
              <div class="hide-scroll overflow-auto max-h-56">
                {#each filtered as track}
                  <Select.Item value={FILE_MAP[track as FileMapKey]} label={track}>{track}</Select.Item>
                {/each}
              </div>
            </Select.Group>
          </Select.Content>
          <Select.Input onchange={(e) => handleOnSelection(e.currentTarget)} name="favoriteFruit" />
        </Select.Root>
      </span>
    </Card.Title>
  </Card.Header>
  <Card.Content class="pb-5">
    <span class="flex flex-row items-center justify-between">
      <Label for={"track" + id} class="mr-20">Volume:</Label>
      <Slider id={"track" + id} />
    </span>
  </Card.Content>
</Card.Root>

<style>
  .hide-scroll {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .hide-scroll::-webkit-scrollbar {
    display: none;
  }
</style>