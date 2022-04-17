"use strict";
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
var onClickLogin = function () {
    router_1["default"].push("/stock");
};
function Login(_a) {
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
                    react_1["default"].createElement(material_1.Box, { component: "h1" }, "Login"),
                    react_1["default"].createElement("form", { noValidate: true },
                        react_1["default"].createElement(TextField_1["default"], { id: "username", label: "username", type: "text", autoComplete: "username", margin: "normal", fullWidth: true }),
                        react_1["default"].createElement(TextField_1["default"], { id: "password", label: "Password", type: "password", autoComplete: "password", margin: "normal", fullWidth: true }),
                        react_1["default"].createElement(Button_1["default"], { fullWidth: true, variant: "contained", onClick: onClickLogin }, "Login"),
                        react_1["default"].createElement(Button_1["default"], { fullWidth: true, onClick: function () {
                                router_1["default"].push("/register");
                            } }, "register"))),
                react_1["default"].createElement(CardActions_1["default"], null,
                    react_1["default"].createElement(Button_1["default"], { size: "small" }, "Share"),
                    react_1["default"].createElement(Button_1["default"], { size: "small" }, "Learn More"))),
            react_1["default"].createElement("style", { jsx: true, global: true }, "\n            body {\n              min-height: 100vh;\n              position: relative;\n              margin: 0px;\n              background-size: cover;\n              background-image: url(\"/static/img/liverpool-03.jpg\");\n              text-align: center;\n            }\n          "))));
}
exports["default"] = Login;
