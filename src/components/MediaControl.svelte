<script>
  import { getAudioController } from "../libs/AudioController.svelte";
  import { getAudioMixer } from "../libs/AudioMixer.svelte";

  const controller = getAudioController();
  const mixer = getAudioMixer();

  const handleOnStart = () => {
    controller.Start();
  };
</script>

<div>
  <span>
    {controller.duration}
  </span>
  <button class="btn" onclick={handleOnStart}> Start </button>
</div>
