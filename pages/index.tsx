import Footer from "../components/footer/index";
import Header from "../components/header/index";
import { GlobalStyle } from "../styles/globalstyle";
import Products from "../components/products/index";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Tech</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Products />
      <Footer />
    </>
  );
}
