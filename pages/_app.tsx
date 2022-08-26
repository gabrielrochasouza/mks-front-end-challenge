import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import {  store } from "../store";
import { GlobalStyle } from "../styles/globalstyle";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

// export default wrapper.withRedux(MyApp);
