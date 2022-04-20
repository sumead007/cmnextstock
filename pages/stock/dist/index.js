"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var react_1 = require("react");
var layout_1 = require("../../components/layouts/layout");
var x_data_grid_1 = require("@mui/x-data-grid");
var material_1 = require("@mui/material");
var react_number_format_1 = require("react-number-format");
var Edit_1 = require("@mui/icons-material/Edit");
var material_2 = require("@mui/material");
var Delete_1 = require("@mui/icons-material/Delete");
var IconButton_1 = require("@mui/material/IconButton");
var Button_1 = require("@material-ui/core/Button");
var router_1 = require("next/router");
var axios_1 = require("axios");
function Stock(_a) {
    var _this = this;
    var _b = react_1.useState([]), products = _b[0], setproducts = _b[1];
    var load_data = function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("http://localhost:8085/api/v2/stock/product")];
                case 1:
                    res = _a.sent();
                    setproducts(res.data);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        load_data();
    }, []);
    var columns = [
        {
            field: "action",
            headerName: "action",
            width: 130,
            renderCell: function (item) { return (react_1["default"].createElement(material_2.Box, null,
                react_1["default"].createElement(IconButton_1["default"], { "aria-label": "edit", onClick: function () {
                        router_1["default"].push({
                            pathname: "/stock/edit",
                            query: { id: item.id }
                        });
                    } },
                    react_1["default"].createElement(Edit_1["default"], { sx: { color: "yellow" } })),
                react_1["default"].createElement(IconButton_1["default"], { "aria-label": "delete", onClick: function () {
                        console.log("delete");
                    } },
                    react_1["default"].createElement(Delete_1["default"], { sx: { color: "red" } })))); }
        },
        {
            field: "id",
            headerName: "id",
            width: 130,
            renderCell: function (item) { return (react_1["default"].createElement(material_1.Typography, { variant: "body1", color: "primary" }, item.value)); }
        },
        { field: "name", headerName: "name", width: 130 },
        {
            field: "image",
            headerName: "image",
            // type: 'number',
            width: 90,
            renderCell: function (item) { return (react_1["default"].createElement("img", { src: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4L9Li4ZTkHOsfRLZqfUAiLSmsoQ834Z9V4NmK4R9tYhJvPVFs0A.jpg", style: { width: 70, height: 70, borderRadius: "5%" } })); }
        },
        {
            field: "price",
            headerName: "price",
            width: 200,
            renderCell: function (params) { return (react_1["default"].createElement(react_number_format_1["default"], { value: params.value, displayType: "text", thousandSeparator: true, decimalScale: 2, fixedDecimalScale: true, prefix: "$" })); }
        },
        { field: "stock", headerName: "stock", width: 130 },
    ];
    function CustomToolbar() {
        return (react_1["default"].createElement(x_data_grid_1.GridToolbarContainer, null,
            react_1["default"].createElement("div", { style: { padding: "0px 10px" } },
                react_1["default"].createElement(Button_1["default"], { variant: "contained", fullWidth: true, color: "primary", disableElevation: true, onClick: function () { return router_1["default"].push("/stock/create"); } }, "Created"))));
    }
    return (react_1["default"].createElement(layout_1["default"], null,
        react_1["default"].createElement("div", { style: { height: 400, width: "100%" } },
            react_1["default"].createElement(x_data_grid_1.DataGrid, { sx: { backgroundColor: "white" }, rows: products != [] ? products : [], columns: columns, pageSize: 5, getRowId: function (row) { return row.id; }, rowsPerPageOptions: [5], components: {
                    Toolbar: CustomToolbar
                } }))));
}
exports["default"] = Stock;
