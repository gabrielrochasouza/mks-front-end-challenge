import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { GlobalStyle } from "../styles/globalstyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
