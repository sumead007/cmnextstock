"use strict";
exports.__esModule = true;
var react_1 = require("react");
var footer_1 = require("./footer");
var header_1 = require("./header");
var menu_1 = require("./menu");
var Toolbar_1 = require("@mui/material/Toolbar");
var Container_1 = require("@mui/material/Container");
var Box_1 = require("@mui/material/Box");
function Layout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(header_1["default"], null),
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement(Box_1["default"], { component: "main", sx: { flexGrow: 1, p: 3 } },
            react_1["default"].createElement(Toolbar_1["default"], null),
            react_1["default"].createElement(Container_1["default"], { style: { display: "flex", paddingLeft: 240 } }, children)),
        react_1["default"].createElement(footer_1["default"], { style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#111",
                height: "auto",
                width: "100vw",
                paddingTop: "40px",
                color: "#fff"
            } }),
        react_1["default"].createElement("style", { jsx: true, global: true }, "\n          body {\n            margin: 0px;\n          }\n        ")));
}
exports["default"] = Layout;
