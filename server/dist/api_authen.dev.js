"use strict";

var express = require("express");

var router = express.Router();

var user = require("./models/user");

var bcrypt = require("bcryptjs");

var constants = require("./constant"); // const jwt = require("./jwt");
// Login


router.post("/login", function _callee(req, res) {
  var _req$body, username, password, result, payload, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(user.findOne({
            where: {
              username: username
            }
          }));

        case 3:
          result = _context.sent;

          if (result != null) {
            if (bcrypt.compareSync(password, result.password)) {
              payload = {
                username: username,
                level: "normal"
              }; // const token = jwt.sign(payload);

              token = payload;
              res.json({
                result: constants.kResultOk,
                token: "1234",
                // username,
                message: JSON.stringify(result)
              });
            } else {
              res.json({
                result: constants.kResultNok,
                message: "Incorrect password"
              });
            }
          } else {
            res.json({
              result: constants.kResultNok,
              message: "Incorrect username"
            });
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Register

router.post("/register", function _callee2(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          req.body.password = bcrypt.hashSync(req.body.password, 8);
          _context2.next = 4;
          return regeneratorRuntime.awrap(user.create(req.body));

        case 4:
          result = _context2.sent;
          res.json({
            result: constants.kResultOk,
            message: JSON.stringify(result)
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: JSON.stringify(_context2.t0)
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Query all users

router.get("/users", function _callee3(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(user.findAll());

        case 2:
          result = _context3.sent;
          res.json(result);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = router;