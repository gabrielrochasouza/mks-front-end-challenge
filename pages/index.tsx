import Footer from "../components/footer/index";
import Header from "../components/header/index";
import Products from "../components/products/index";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { refresh } from "../store/cart-reducer";
import { useDispatch } from "react-redux";
import { parseCookies } from "nookies";

export default function Home(props) {
  const dispatch = useDispatch();
  props["@Products"] && dispatch(refresh(JSON.parse(props["@Products"])));
  return (
    <>
      <Head>
        <title>Loja Tech</title>
      </Head>

      <Header/>
      <Products/>
      <Footer/>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const products = parseCookies(ctx);
  return { props: products };
}
