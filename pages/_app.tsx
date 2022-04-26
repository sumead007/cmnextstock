import type { AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { wrapper } from "../redux";

interface AppProps {}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  console.log("test") // dev

  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
