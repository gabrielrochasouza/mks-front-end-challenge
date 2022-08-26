import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalstyle";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}