// This will hit the registration endpoint

import Api from "@/services/Api";

// Export an object that has a register method to it

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};
