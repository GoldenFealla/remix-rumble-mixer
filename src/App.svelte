<script lang="ts">
  import "./app.css";
  import MediaControl from "./components/MediaControl.svelte";
  import TrackList from "./components/TrackList.svelte";
</script>

<div class="main">
  <div class="container">
    <div class="mixer card">
      <TrackList />
    </div>
    <div class="control card">
      <MediaControl />
    </div>
  </div>
</div>

<style>
  .main {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .mixer {
    width: 100%;

    min-height: 500px;

    display: flex;
    flex-direction: column;
  }

  .control {
    width: 100%;

    display: flex;
    flex-direction: column;
  }
</style>
