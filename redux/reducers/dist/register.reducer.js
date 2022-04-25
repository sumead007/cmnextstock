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
var actionTypes_1 = require("../saga/actionTypes");
var initialState = {
    result: null,
    isFetching: false,
    isFailed: false
};
exports["default"] = (function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionTypes_1.REGISTER_FETCHING:
            return __assign(__assign({}, state), { result: null, isFetching: true, isFailed: false });
        case actionTypes_1.REGISTER_SUCCESS:
            return __assign(__assign({}, state), { result: payload.result, isFetching: false, isFailed: false });
        case actionTypes_1.REGISTER_FAILED:
            return __assign(__assign({}, state), { result: null, isFetching: false, isFailed: true });
        default:
            return state;
    }
});
