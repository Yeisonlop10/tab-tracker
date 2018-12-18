// This will hit the registration endpoint

import Api from "@/services/Api";

// Export an object that has a register method to it

export default {
  // Method to search
  index(search) {
    return Api().get("songs", {
      params: {
        search: search
      }
    });
  },
  // To get the song id from the backend
  show(songId) {
    return Api().get(`songs/${songId}`);
  },
  post(song) {
    return Api().post("songs", song);
  },
  put(song) {
    return Api().put(`songs/${song.id}`, song);
  }
};
