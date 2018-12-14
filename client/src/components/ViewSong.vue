<template>
    
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
    data () {
      return {
          song: null
      }
    },
    // Get the song id from the store
    async mounted () {        
        const songId = this.$store.state.route.params.songId
        this.song = await SongsService.show(songId)
        console.log(song)
    }
}
</script>
<style>

</style>

