import Footer from "../components/footer/index";
import Header from "../components/header/index";
import Products from "../components/products/index";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Tech</title>
      </Head>
      <Header />
      <Products />
      <Footer />
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  );
}
