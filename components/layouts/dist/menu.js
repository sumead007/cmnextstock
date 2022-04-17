"use strict";
exports.__esModule = true;
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Drawer_1 = require("@mui/material/Drawer");
var Toolbar_1 = require("@mui/material/Toolbar");
var List_1 = require("@mui/material/List");
var Divider_1 = require("@mui/material/Divider");
var ListItem_1 = require("@mui/material/ListItem");
var ListItemIcon_1 = require("@mui/material/ListItemIcon");
var ListItemText_1 = require("@mui/material/ListItemText");
var MoveToInbox_1 = require("@mui/icons-material/MoveToInbox");
var Mail_1 = require("@mui/icons-material/Mail");
var drawerWidth = 240;
function Menu() {
    var _a;
    return (React.createElement(Drawer_1["default"], { variant: "permanent", sx: (_a = {
                width: drawerWidth,
                flexShrink: 0
            },
            _a["& .MuiDrawer-paper"] = { width: drawerWidth, boxSizing: 'border-box' },
            _a) },
        React.createElement(Toolbar_1["default"], null),
        React.createElement(Box_1["default"], { sx: { overflow: 'auto' } },
            React.createElement(List_1["default"], null, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) { return (React.createElement(ListItem_1["default"], { button: true, key: text },
                React.createElement(ListItemIcon_1["default"], null, index % 2 === 0 ? React.createElement(MoveToInbox_1["default"], null) : React.createElement(Mail_1["default"], null)),
                React.createElement(ListItemText_1["default"], { primary: text }))); })),
            React.createElement(Divider_1["default"], null),
            React.createElement(List_1["default"], null, ['All mail', 'Trash', 'Spam'].map(function (text, index) { return (React.createElement(ListItem_1["default"], { button: true, key: text },
                React.createElement(ListItemIcon_1["default"], null, index % 2 === 0 ? React.createElement(MoveToInbox_1["default"], null) : React.createElement(Mail_1["default"], null)),
                React.createElement(ListItemText_1["default"], { primary: text }))); })))));
}
exports["default"] = Menu;
