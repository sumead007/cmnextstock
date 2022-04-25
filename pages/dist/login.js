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
var formik_1 = require("formik");
var yup = require("yup");
var react_redux_1 = require("react-redux");
var actions_1 = require("../redux/actions");
var onClickLogin = function () {
    router_1["default"].push("/stock");
};
var validationSchema = yup.object({
    username: yup
        .string("Enter your username")
        .min(2, "username should be of minimum 2 characters length")
        .required("username is required"),
    password: yup
        .string("Enter your password")
        .min(2, "กรุณากรอก1ตัวขึ้น")
        .required("password is required")
});
function Login(_a) {
    //  const authReducer =  useSelector(({authReducer})=>authReducer)
    var dispatch = react_redux_1.useDispatch();
    var loginReducer = react_redux_1.useSelector(function (_a) {
        var loginReducer = _a.loginReducer;
        return loginReducer;
    });
    var formik = formik_1.useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            alert(JSON.stringify(values, null, 2));
        }
    });
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
                    react_1["default"].createElement("form", { onSubmit: formik.handleSubmit },
                        react_1["default"].createElement(TextField_1["default"], { id: "username", label: "username", type: "text", autoComplete: "username", margin: "normal", fullWidth: true, value: formik.values.username, onChange: formik.handleChange, error: formik.touched.username && Boolean(formik.errors.username), helperText: formik.touched.username && formik.errors.username }),
                        react_1["default"].createElement(TextField_1["default"], { id: "password", label: "Password", type: "password", autoComplete: "password", margin: "normal", fullWidth: true, value: formik.values.password, onChange: formik.handleChange, error: formik.touched.password && Boolean(formik.errors.password), helperText: formik.touched.password && formik.errors.password }),
                        react_1["default"].createElement(Button_1["default"], { fullWidth: true, variant: "contained", type: "button", onClick: function () {
                                dispatch(actions_1["default"].login(formik.values));
                            } }, "Login"),
                        react_1["default"].createElement(Button_1["default"], { fullWidth: true, onClick: function () {
                                router_1["default"].push("/register");
                            } }, "register"))),
                react_1["default"].createElement(CardActions_1["default"], null,
                    react_1["default"].createElement(Button_1["default"], { size: "small" }, "Share"),
                    react_1["default"].createElement(Button_1["default"], { size: "small" }, "Learn More"))),
            react_1["default"].createElement("style", { jsx: true, global: true }, "\n            body {\n              min-height: 100vh;\n              position: relative;\n              margin: 0px;\n              background-size: cover;\n              background-image: url(\"/static/img/liverpool-03.jpg\");\n              text-align: center;\n            }\n          "))));
}
exports["default"] = Login;
