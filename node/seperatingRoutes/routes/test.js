const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is sending testing");
});

router.put("/", (req, res) => {
  res.send("this is sending put");
});

router.post("/", (req, res) => {
  res.send("this is sending post");
});

module.exports = router;
