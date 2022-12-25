const express = require("express");
const router = express.Router();

router.post("/", function (req, res, next) {
    if (!req.body) {
      return res.status(400).json({
        status: "Bad Request",
        message: "req body cannot be empty!",
      });
    }
  });

module.exports = router;