"use strict";
exports.__esModule = true;
exports.deleteStock = void 0;
var actionTypes = require("../saga/actionTypes");
exports.deleteStock = function (payload, dispatch) { return ({
    type: actionTypes.STOCK_DELETE_REQUEST,
    payload: payload,
    dispatch: dispatch
}); };
exports["default"] = {
    deleteStock: exports.deleteStock
};
