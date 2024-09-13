<script>
  import Play from "lucide-svelte/icons/play";
  import { Slider } from "$lib/components/ui/slider/index.ts";
  import { Button } from "$lib/components/ui/button/index.ts";
</script>

<span class="w-full flex flex-col items-center px-2">
  <Slider />
  <Button size="icon" class="mt-5">
    <Play class="h-5 w-5" />
  </Button>
</span>
