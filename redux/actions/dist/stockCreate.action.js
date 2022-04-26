"use strict";
exports.__esModule = true;
exports.stockCreateFailed = exports.stockCreateSuccess = exports.stockCreateFetching = exports.createStock = void 0;
var actionTypes = require("../saga/actionTypes");
exports.createStock = function (payload) { return ({
    type: actionTypes.STOCK_CREATE_REQUEST,
    payload: payload
}); };
exports.stockCreateFetching = function () { return ({
    type: actionTypes.STOCK_CREATE_FETCHING
}); };
exports.stockCreateSuccess = function (payload) { return ({
    type: actionTypes.STOCK_CREATE_SUCCESS,
    payload: payload
}); };
exports.stockCreateFailed = function () { return ({
    type: actionTypes.STOCK_CREATE_FAILED
}); };
exports["default"] = {
    createStock: exports.createStock,
    stockCreateFetching: exports.stockCreateFetching,
    stockCreateSuccess: exports.stockCreateSuccess,
    stockCreateFailed: exports.stockCreateFailed
};
