"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var contants_1 = require("./contants");
var httpClient = axios_1["default"].create({
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL
});
httpClient.interceptors.request.use(function (req) {
    var token = localStorage.getItem(contants_1.TOKEN);
    // NOTE: add token
    if (token)
        req.headers = { 'x-access-token': token };
    return req;
});
exports["default"] = httpClient;
