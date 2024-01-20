require("dotenv").config;
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
   cors({
      origin: process.env.CORS_ORIGIN,
   })
);
app.use(express.json({ limit: "16KB" }));
// basically extended true means sometimes we have nested objects for that.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

module.exports = app;
