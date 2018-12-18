<template>
  <panel title="Search">
    <v-text-field label="Search by song title, artist, album, or genre" v-model="search"></v-text-field>
  </panel>
</template>

<script>
// Using lodash
import _ from "lodash";

export default {
  data() {
    return {
      search: ""
    };
  },
  // Watch is an attribute on the vue component
  watch: {
    // Using debounce method from lodash to wait 700 ms after typing
    // to make request to the server
    search: _.debounce(async function(value) {
      const route = {
        name: "songs"
      };
      if (this.search !== "") {
        // If the search is not eual to an empty string
        route.query = {
          // Gives to search the value of the query
          search: this.search
        };
      }
      this.$router.push(route);
    }, 700),
    // When typing in the search bar on web explorer
    // This automatically changes the value on search bar
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style>
</style>
