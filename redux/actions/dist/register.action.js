"use strict";
exports.__esModule = true;
exports.registerFailed = exports.registerSuccess = exports.registerFetching = exports.register = void 0;
//rxaction
var actionTypes = require("../saga/actionTypes");
exports.register = function (payload) { return ({
    type: actionTypes.REGISTER_REQUEST,
    payload: payload
}); };
exports.registerFetching = function () { return ({
    type: actionTypes.REGISTER_FETCHING
}); };
exports.registerSuccess = function (payload) { return ({
    type: actionTypes.REGISTER_SUCCESS,
    payload: payload
}); };
exports.registerFailed = function () { return ({
    type: actionTypes.REGISTER_FAILED
}); };
exports["default"] = {
    register: exports.register,
    registerFetching: exports.registerFetching,
    registerSuccess: exports.registerSuccess,
    registerFailed: exports.registerFailed
};
