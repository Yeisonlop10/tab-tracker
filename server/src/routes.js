const AuthenticationController = require("./controllers/AuthenticationController.js");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const SongsController = require("./controllers/SongsController");

module.exports = app => {
  // Comand to make a post
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post("/login", AuthenticationController.login);

  app.get("/songs", SongsController.index);

  app.get("/songs/:songId", SongsController.show);

  app.post("/songs", SongsController.post);
};