"use strict";
exports.__esModule = true;
var document_1 = require("next/document");
var react_1 = require("react");
function CMDoc() {
    return (react_1["default"].createElement(document_1.Html, null,
        react_1["default"].createElement(document_1.Head, null,
            react_1["default"].createElement("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }),
            react_1["default"].createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" }),
            react_1["default"].createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" })),
        react_1["default"].createElement("body", null,
            react_1["default"].createElement(document_1.Main, null),
            react_1["default"].createElement(document_1.NextScript, null))));
}
exports["default"] = CMDoc;
// CMDoc.getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage;
//   // Run the React rendering logic synchronously
//   ctx.renderPage = () =>
//     originalRenderPage({
//       // Useful for wrapping the whole react tree
//       enhanceApp: (App) => App,
//       // Useful for wrapping in a per-page basis
//       enhanceComponent: (Component) => Component,
//     });
//   // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//   const initialProps = await Document.getInitialProps(ctx);
//   return initialProps;
// };
