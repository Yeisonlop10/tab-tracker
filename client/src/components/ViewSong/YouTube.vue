<template>
  <panel title="YouTube Video">
    <youtube :video-id="youtubeId" :player-width="600" :player-height="330"></youtube>
  </panel>
</template>

<script>

import YouTube from "./YouTube";
export default {
  props: ["youtubeId"],
  components: {
    YouTube
  }
};
</script>
<style scoped>
</style>

