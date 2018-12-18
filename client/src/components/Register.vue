<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error"/>
        <br>
        <v-btn dark class="cyan" @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      pasword: "",
      error: null
    };
  },
  watch: {},
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        // This line will call setToken inside store
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        // To redirect new user
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error;
      }
      // console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
