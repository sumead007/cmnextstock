"use strict";
exports.__esModule = true;
var React = require("react");
var AppBar_1 = require("@mui/material/AppBar");
var Toolbar_1 = require("@mui/material/Toolbar");
var Typography_1 = require("@mui/material/Typography");
function Header() {
    return (React.createElement(AppBar_1["default"], { position: "fixed", sx: { zIndex: function (theme) { return theme.zIndex.drawer + 1; } } },
        React.createElement(Toolbar_1["default"], null,
            React.createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div" }, "Clipped drawer"))));
}
exports["default"] = Header;
