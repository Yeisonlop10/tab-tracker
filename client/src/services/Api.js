// This app will be the conector to hit the back end

import axios from "axios";

// Return the conector
export default () => {
  // This creates the axios object
  return axios.create({
    baseURL: `http://localhost:8081/`
  });
};
