"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var register_reducer_1 = require("./register.reducer");
var login_reducer_1 = require("./login.reducer");
exports["default"] = redux_1.combineReducers({
    registerReducer: register_reducer_1["default"],
    loginReducer: login_reducer_1["default"]
});
