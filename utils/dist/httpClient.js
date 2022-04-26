"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var httpClient = axios_1["default"].create({
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL
});
// httpClient.interceptors.request.use((req) => {
//   const token = localStorage.getItem(TOKEN)
//   // NOTE: add token
//   if (token) req.headers = { 'x-access-token': token }
//   return req
// })
exports["default"] = httpClient;
