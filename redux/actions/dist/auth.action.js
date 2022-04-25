"use strict";
exports.__esModule = true;
exports.setAuthen = void 0;
var router_1 = require("next/router");
var types_1 = require("../types");
//เอาไว้ส่งไปหา reducers
exports.setAuthen = function (payload) { return ({
    type: types_1.AUTHENTICATE,
    payload: payload
}); };
//เอาไว้ให้ component เรียก
// register user
var register = function (_a, type) {
    var username = _a.username, password = _a.password;
    return function (dispatch) {
        dispatch(exports.setAuthen({ token: "1234" }));
        router_1["default"].push("/login");
    };
};
exports["default"] = {
    register: register
};
