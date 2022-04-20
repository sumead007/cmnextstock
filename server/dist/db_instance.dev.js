"use strict";

var Sequelize = require("sequelize");

var sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: true
});

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(sequelize.authenticate());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
})();

module.exports = sequelize;