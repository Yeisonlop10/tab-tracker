const { Song } = require("../models");

module.exports = {
  // This function will try to find the song and limit the search to 20
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 20
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
        error: "An error has occured trying to show the songs"
      });
    }
  },
  // To create song
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      // song already exists
      res.status(500).send({
        error: "An error has occured trying to create the song."
      });
    }
  },
  // To edit song
  async put(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });
      res.send(this.body);
    } catch (err) {
      // Error trying to update song
      res.status(500).send({
        error: "An error has occured trying to update the song."
      });
    }
  }
};
