// This will hit the registration endpoint

import Api from "@/services/Api";

// Export an object that has a register method to it

export default {
  index() {
    return Api().get("songs");
  },
  // To get the song id from the backend
  show(songId) {
    return Api().get(`songs/${songId}`);
  },
  post(song) {
    return Api().post("songs", song);
  }
};
