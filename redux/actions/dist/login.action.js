"use strict";
exports.__esModule = true;
exports.logoutSuccess = exports.logout = exports.relogin = exports.loginFailed = exports.loginSuccess = exports.loginFetching = exports.login = void 0;
var actionTypes = require("../saga/actionTypes");
exports.login = function (payload) { return ({
    type: actionTypes.LOGIN_REQUEST,
    payload: payload
}); };
exports.loginFetching = function () { return ({
    type: actionTypes.LOGIN_FETCHING
}); };
exports.loginSuccess = function (payload) { return ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: payload
}); };
exports.loginFailed = function () { return ({
    type: actionTypes.LOGIN_FAILED
}); };
exports.relogin = function (payload) { return ({
    type: actionTypes.RELOGIN_REQUEST,
    payload: payload
}); };
exports.logout = function () { return ({
    type: actionTypes.LOGOUT_REQUEST
}); };
exports.logoutSuccess = function () { return ({
    type: actionTypes.LOGOUT_SUCCESS
}); };
exports["default"] = {
    login: exports.login,
    loginFetching: exports.loginFetching,
    loginSuccess: exports.loginSuccess,
    loginFailed: exports.loginFailed,
    relogin: exports.relogin,
    logout: exports.logout,
    logoutSuccess: exports.logoutSuccess
};
