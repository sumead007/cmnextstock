"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.sagaLogout = exports.sagaReLogin = exports.sagaLogin = void 0;
var contants_1 = require("../../utils/contants");
var effects_1 = require("redux-saga/effects");
var actions_1 = require("../actions");
var httpClient_1 = require("../../utils/httpClient");
var router_1 = require("next/router");
function sagaLogin(_a) {
    var response, result, error_1;
    var payload = _a.payload;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 9]);
                return [4 /*yield*/, effects_1.put(actions_1["default"].loginFetching())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.call(httpClient_1["default"].post, "/authen/login", payload)];
            case 2:
                response = _b.sent();
                result = response.data.result;
                if (!(result == contants_1.kResultOk)) return [3 /*break*/, 4];
                return [4 /*yield*/, effects_1.put(actions_1["default"].loginSuccess({ result: response.data }))];
            case 3:
                _b.sent();
                router_1["default"].push("/stock");
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, effects_1.put(actions_1["default"].loginFailed())];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6: return [3 /*break*/, 9];
            case 7:
                error_1 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1["default"].loginFailed())];
            case 8:
                _b.sent();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}
exports.sagaLogin = sagaLogin;
function sagaReLogin() {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}
exports.sagaReLogin = sagaReLogin;
function sagaLogout() {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}
exports.sagaLogout = sagaLogout;
