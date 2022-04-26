"use strict";
exports.__esModule = true;
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
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
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
function StockCreate(_a) {
    var stockCreateReducer = react_redux_1.useSelector(function (state) { return state.stockCreateReducer; });
    var dispatch = react_redux_1.useDispatch();
    var formik = formik_1.useFormik({
        initialValues: {
            name: "foobar",
            price: 2,
            stock: 1
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            // alert(JSON.stringify(values, null, 2));
            var formData = new FormData();
            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("stock", values.stock);
            formData.append("image", values.file);
            dispatch(actions_1["default"].createStock(formData));
        }
    });
    return (react_1["default"].createElement(layout_1["default"], null,
        react_1["default"].createElement(Card_1["default"], { sx: { flexGrow: 1 } },
            react_1["default"].createElement(Box_1["default"], { component: "h1" }, "Create Product"),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement("form", { onSubmit: formik.handleSubmit },
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
                    react_1["default"].createElement(Button_1["default"], { color: "primary", variant: "contained", type: "submit", onSubmit: function () { }, disabled: stockCreateReducer.isFetching },
                        "Submit",
                        stockCreateReducer.isFetching && (react_1["default"].createElement(CircularProgress_1["default"], { color: "secondary", size: 20, style: { marginLeft: 8 } }))),
                    react_1["default"].createElement(Button_1["default"], { onClick: function () { return router_1["default"].back(); } }, "Cancel"))))));
}
exports["default"] = StockCreate;
