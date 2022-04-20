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
var material_1 = require("@mui/material");
var react_1 = require("react");
var Card_1 = require("@mui/material/Card");
var CardActions_1 = require("@mui/material/CardActions");
var CardContent_1 = require("@mui/material/CardContent");
var CardMedia_1 = require("@mui/material/CardMedia");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
var router_1 = require("next/router");
function Register(_a) {
    var _b = react_1.useState({
        username: "",
        password: ""
    }), account = _b[0], setaccount = _b[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Box, { sx: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh"
            } },
            react_1["default"].createElement(Card_1["default"], { sx: {
                    maxWidth: 345
                } },
                react_1["default"].createElement(CardMedia_1["default"], { component: "img", height: "200", image: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4MDgvq5XaLTlI18RVr0bv8sSRPmSp7DkZCXMWirpW7Dcb3Sjkwj.jpg", alt: "green iguana" }),
                react_1["default"].createElement(CardContent_1["default"], null,
                    react_1["default"].createElement(material_1.Box, { component: "h1" }, "Register"),
                    react_1["default"].createElement("form", { noValidate: true },
                        react_1["default"].createElement(TextField_1["default"], { id: "username", label: "username", type: "text", autoComplete: "username", margin: "normal", fullWidth: true, value: account.username, onChange: function (e) {
                                return setaccount(__assign(__assign({}, account), { username: e.target.value }));
                            } }),
                        react_1["default"].createElement(TextField_1["default"], { id: "password", label: "Password", type: "password", autoComplete: "password", margin: "normal", fullWidth: true, value: account.password, onChange: function (e) {
                                return setaccount(__assign(__assign({}, account), { password: e.target.value }));
                            } }),
                        react_1["default"].createElement(Button_1["default"], { fullWidth: true, variant: "contained", onClick: function () {
                                alert(JSON.stringify(account));
                            } }, "register"),
                        react_1["default"].createElement(Button_1["default"], { fullWidth: true, onClick: function () {
                                // Router.back();
                                router_1["default"].push("/login");
                            } }, "cencel"))),
                react_1["default"].createElement(CardActions_1["default"], null,
                    react_1["default"].createElement(Button_1["default"], { size: "small" }, "Share"),
                    react_1["default"].createElement(Button_1["default"], { size: "small" }, "Learn More"))),
            react_1["default"].createElement("style", { jsx: true, global: true }, "\n            body {\n              min-height: 100vh;\n              position: relative;\n              margin: 0px;\n              background-size: cover;\n              background-image: url(\"/static/img/liverpool-03.jpg\");\n              text-align: center;\n            }\n          "))));
}
exports["default"] = Register;
