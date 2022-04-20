"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var router = express.Router();

var product = require("./models/product");

var Sequelize = require("sequelize");

var constants = require("./constant");

var formidable = require("formidable");

var path = require("path");

var fs = require("fs-extra");

var Op = Sequelize.Op; // const jwt = require("./jwt");
// Upload Image

uploadImage = function uploadImage(files, doc) {
  var fileExtention, newpath, result;
  return regeneratorRuntime.async(function uploadImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(files.image != null)) {
            _context.next = 11;
            break;
          }

          fileExtention = files.image.originalFilename.split(".")[1];
          doc.image = "".concat(doc.id, ".").concat(fileExtention);
          newpath = path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;

          if (!fs.existsSync(newpath)) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(fs.remove(newpath));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(fs.moveSync(files.image.filepath, newpath));

        case 9:
          // Update database
          result = product.update({
            image: doc.image
          }, {
            where: {
              id: doc.id
            }
          });
          return _context.abrupt("return", result);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Get Products


router.get("/product", function _callee(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(product.findAll({
            order: Sequelize.literal("id DESC")
          }));

        case 2:
          result = _context2.sent;
          res.json(result);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Add Product

router.post("/product", function _callee3(req, res) {
  var form;
  return regeneratorRuntime.async(function _callee3$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            form = new formidable.IncomingForm();
            form.parse(req, function _callee2(error, fields, files) {
              var result;
              return regeneratorRuntime.async(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return regeneratorRuntime.awrap(product.create(fields));

                    case 2:
                      result = _context3.sent;
                      _context3.next = 5;
                      return regeneratorRuntime.awrap(uploadImage(files, result));

                    case 5:
                      result = _context3.sent;
                      res.json({
                        result: constants.kResultOk,
                        message: JSON.stringify(result)
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              });
            });
          } catch (error) {
            res.json({
              result: constants.kResultNok,
              message: JSON.stringify(error)
            });
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // Update Product

router.put("/product", function _callee5(req, res) {
  var form;
  return regeneratorRuntime.async(function _callee5$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          try {
            form = new formidable.IncomingForm();
            form.parse(req, function _callee4(err, fields, files) {
              var result;
              return regeneratorRuntime.async(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(product.update(fields, {
                        where: {
                          id: fields.id
                        }
                      }));

                    case 2:
                      result = _context5.sent;
                      _context5.next = 5;
                      return regeneratorRuntime.awrap(uploadImage(files, fields));

                    case 5:
                      result = _context5.sent;
                      res.json({
                        result: constants.kResultOk,
                        message: JSON.stringify(result)
                      });

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            });
          } catch (err) {
            res.json({
              result: constants.kResultNok,
              message: JSON.stringify(err)
            });
          }

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // Delete Product

router["delete"]("/product/:id", function _callee6(req, res) {
  var id, result;
  return regeneratorRuntime.async(function _callee6$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return regeneratorRuntime.awrap(product.findOne({
            where: {
              id: id
            }
          }));

        case 4:
          result = _context7.sent;
          _context7.next = 7;
          return regeneratorRuntime.awrap(fs.remove(path.resolve(__dirname + "/uploaded/images/") + "/" + result.image));

        case 7:
          _context7.next = 9;
          return regeneratorRuntime.awrap(product.destroy({
            where: {
              id: id
            }
          }));

        case 9:
          result = _context7.sent;
          res.json({
            result: constants.kResultOk,
            message: JSON.stringify(result)
          });
          _context7.next = 16;
          break;

        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: "Internal error"
          });

        case 16:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 13]]);
}); // Get Product by Id

router.get("/product/:id", function _callee7(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee7$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(product.findOne({
            where: {
              id: req.params.id
            }
          }));

        case 2:
          result = _context8.sent;

          if (result) {
            res.json(result);
          } else {
            res.json({});
          }

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
}); // Get Products by Keyword

router.get("/product/keyword/:keyword", function _callee8(req, res) {
  var keyword, result;
  return regeneratorRuntime.async(function _callee8$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          keyword = req.params.keyword;
          _context9.next = 3;
          return regeneratorRuntime.awrap(product.findAll({
            where: {
              name: _defineProperty({}, Op.like, "%".concat(keyword, "%"))
            }
          }));

        case 3:
          result = _context9.sent;
          res.json(result);

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
});
module.exports = router;