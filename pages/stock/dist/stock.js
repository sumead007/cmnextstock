"use strict";
exports.__esModule = true;
var react_1 = require("react");
var layout_1 = require("../../components/layouts/layout");
var x_data_grid_1 = require("@mui/x-data-grid");
var dummy_1 = require("../api/dummy");
var material_1 = require("@mui/material");
var react_number_format_1 = require("react-number-format");
var Edit_1 = require("@mui/icons-material/Edit");
var material_2 = require("@mui/material");
var Delete_1 = require("@mui/icons-material/Delete");
var IconButton_1 = require("@mui/material/IconButton");
var Button_1 = require("@material-ui/core/Button");
function Stock(_a) {
    var columns = [
        {
            field: "action",
            headerName: "action",
            width: 130,
            renderCell: function (item) { return (react_1["default"].createElement(material_2.Box, null,
                react_1["default"].createElement(IconButton_1["default"], { "aria-label": "edit" },
                    react_1["default"].createElement(Edit_1["default"], { sx: { color: "yellow" }, onClick: function () { } })),
                react_1["default"].createElement(IconButton_1["default"], { "aria-label": "delete" },
                    react_1["default"].createElement(Delete_1["default"], { sx: { color: "red" }, onClick: function () { } })))); }
        },
        {
            field: "title",
            headerName: "title",
            width: 130,
            renderCell: function (item) { return (react_1["default"].createElement(material_1.Typography, { variant: "body1", color: "primary" }, item.value)); }
        },
        { field: "type", headerName: "type", width: 130 },
        {
            field: "description",
            headerName: "description",
            width: 130,
            minWidth: 400
        },
        {
            field: "filename",
            headerName: "filename",
            // type: 'number',
            width: 90,
            renderCell: function (item) { return (react_1["default"].createElement("img", { src: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4L9Li4ZTkHOsfRLZqfUAiLSmsoQ834Z9V4NmK4R9tYhJvPVFs0A.jpg", style: { width: 70, height: 70, borderRadius: "5%" } })); }
        },
        { field: "height", headerName: "height", width: 130 },
        { field: "width", headerName: "width", width: 130 },
        {
            field: "price",
            headerName: "price",
            width: 200,
            renderCell: function (params) { return (react_1["default"].createElement(react_number_format_1["default"], { value: params.value, displayType: "text", thousandSeparator: true, decimalScale: 2, fixedDecimalScale: true, prefix: "$" })); }
        },
        { field: "rating", headerName: "rating", width: 130 },
    ];
    function CustomToolbar() {
        return (react_1["default"].createElement(x_data_grid_1.GridToolbarContainer, null,
            react_1["default"].createElement("div", { style: { padding: "0px 10px" } },
                react_1["default"].createElement(Button_1["default"], { variant: "contained", fullWidth: true, color: "primary", disableElevation: true }, "Created"))));
    }
    return (react_1["default"].createElement(layout_1["default"], null,
        react_1["default"].createElement("div", { style: { height: 400, width: "100%" } },
            react_1["default"].createElement(x_data_grid_1.DataGrid, { sx: { backgroundColor: "white" }, rows: dummy_1.products, columns: columns, pageSize: 5, getRowId: function (row) { return row.title; }, rowsPerPageOptions: [5], components: {
                    Toolbar: CustomToolbar
                } }))));
}
exports["default"] = Stock;
