import { ServerStyleSheets } from "@mui/styles";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function CMDoc() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

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
