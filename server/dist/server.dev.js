"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var PORT = process.env.PORT || 8085;
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express["static"](__dirname + "/uploaded"));
app.use(cors());
app.use("/api/v2/authen/", require("./api_authen"));
app.use("/api/v2/stock/", require("./api_stock"));
app.listen(PORT, function () {
  console.log("Backend is running..");
});