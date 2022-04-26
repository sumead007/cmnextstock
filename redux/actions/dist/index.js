"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var login_action_1 = require("./login.action");
var register_action_1 = require("./register.action");
var stockList_action_1 = require("./stockList.action");
var stockCreate_action_1 = require("./stockCreate.action");
var stockEdit_action_1 = require("./stockEdit.action");
var stockDelete_action_1 = require("./stockDelete.action");
exports["default"] = __assign(__assign(__assign(__assign(__assign(__assign({}, login_action_1["default"]), register_action_1["default"]), stockList_action_1["default"]), stockCreate_action_1["default"]), stockEdit_action_1["default"]), stockDelete_action_1["default"]);
