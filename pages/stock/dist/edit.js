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
exports.getServerSideProps = void 0;
var react_1 = require("react");
var layout_1 = require("../../components/layouts/layout");
var formik_1 = require("formik");
var Button_1 = require("@mui/material/Button");
var yup = require("yup");
var TextField_1 = require("@mui/material/TextField");
var Card_1 = require("@mui/material/Card");
var Box_1 = require("@mui/material/Box");
var CardContent_1 = require("@mui/material/CardContent");
var router_1 = require("next/router");
var validationSchema = yup.object({
    name: yup
        .string("Enter your name")
        .min(4, "name should be of minimum 8 characters length")
        .required("name is required"),
    price: yup
        .string("Enter your integer")
        .min(1, "กรุณากรอก1ตัวขึ้น")
        .required("price is required"),
    stock: yup
        .string("Enter your integer")
        .min(1, "กรุณากรอก1ตัวขึ้น")
        .required("stock is required")
});
var showPreviewImage = function (values) {
    if (values.file_obj) {
        return react_1["default"].createElement("img", { src: values.file_obj, style: { height: 100, marginTop: 16 } });
    }
};
function StockEdit(_a) {
    var id = _a.id, name = _a.name, stock = _a.stock, price = _a.price;
    var formik = formik_1.useFormik({
        initialValues: {
            id: id,
            name: name,
            price: price,
            stock: stock
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            alert(JSON.stringify(values, null, 2));
        },
        enableReinitialize: true
    });
    return (react_1["default"].createElement(layout_1["default"], null,
        react_1["default"].createElement(Card_1["default"], { sx: { flexGrow: 1 } },
            react_1["default"].createElement(Box_1["default"], { component: "h1" }, "Edit Product"),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement("form", { onSubmit: formik.handleSubmit },
                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, id: "id", name: "id", label: "ProductId", margin: "normal", value: formik.values.id, onChange: formik.handleChange, error: formik.touched.id && Boolean(formik.errors.id), helperText: formik.touched.id && formik.errors.id, disabled: true }),
                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, id: "name", name: "name", label: "name", margin: "normal", value: formik.values.name, onChange: formik.handleChange, error: formik.touched.name && Boolean(formik.errors.name), helperText: formik.touched.name && formik.errors.name }),
                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, id: "price", margin: "normal", name: "price", label: "price", type: "text", value: formik.values.price, onChange: formik.handleChange, error: formik.touched.price && Boolean(formik.errors.price), helperText: formik.touched.price && formik.errors.price }),
                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, id: "stock", margin: "normal", name: "stock", label: "stock", type: "text", value: formik.values.stock, onChange: formik.handleChange, error: formik.touched.stock && Boolean(formik.errors.stock), helperText: formik.touched.stock && formik.errors.stock }),
                    react_1["default"].createElement("div", null, showPreviewImage(formik.values)),
                    react_1["default"].createElement("span", null, "Add Picture"),
                    react_1["default"].createElement("input", { type: "file", onChange: function (e) {
                            e.preventDefault();
                            formik.setFieldValue("file", e.target.files[0]);
                            formik.setFieldValue("file_obj", URL.createObjectURL(e.target.files[0]));
                        } }),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement(Button_1["default"], { color: "primary", onClick: function () {
                        }, variant: "contained", type: "submit" }, "Edit"),
                    react_1["default"].createElement(Button_1["default"], { onClick: function () { return router_1["default"].back(); } }, "Cancel"))))));
}
exports["default"] = StockEdit;
exports.getServerSideProps = function (context) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                props: {
                    id: context.query.id.toString(),
                    name: "test",
                    stock: 1,
                    price: 100
                }
            }];
    });
}); };
