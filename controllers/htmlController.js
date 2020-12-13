// Consts
const router = require("express").Router();
const db = require("../models");

//home routes
router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

router.get("/home", (req, res) => {
  res.render("index", { user: req.user });
});

module.exports = router;
