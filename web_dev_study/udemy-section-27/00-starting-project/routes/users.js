const express = require("express");
const multer = require("multer");

const upload = multer({});

const router = express.Router();

router.get("/", function (req, res) {
   res.render("profiles");
});

router.get("/new-user", function (req, res) {
   res.render("new-user");
});

router.post("/profiles", upload.single("image"), (req, res) => {
   const uploadedImage = req.file;
   const userData = req.body;
});

module.exports = router;
