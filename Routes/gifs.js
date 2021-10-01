var express = require("express");
var router = express.Router();

const Gifs = require("../controllers/gifs");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const { input } = req.query;
  const data = await Gifs.getServerGifs(input);
  res.json(data);
});

module.exports = router;
