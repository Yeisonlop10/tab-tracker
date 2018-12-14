const { Song } = require("../models");

module.exports = {
  // This function will try to find the song and limit the search to 10
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      });
      res.send(songs);
    } catch (err) {
      // email already exists
      res.status(500).send({
        error: "An error has occured trying to fetch the songs"
      });
    }
  },

  // To get the song id
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId);
      res.send(song);
    } catch (err) {
      // Can't get the song id
      res.status(500).send({
        error: "An error has occured trying to fetch the songs"
      });
    }
  },
  // To create song
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      // email already exists
      res.status(500).send({
        error: "An error has occured trying to create the song."
      });
    }
  }
};
