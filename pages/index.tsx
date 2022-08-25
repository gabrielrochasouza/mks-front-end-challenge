import Footer from "../components/footer/index";
import Header from "../components/header/index";
import { GlobalStyle } from "../styles/globalstyle";
// import { Html, Head } from "next/document";
import Products from "../components/products/index";

export default function Home() {
  return (
    <>
      {/* 
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,400&display=swap"
          rel="stylesheet"
        /> 
      </Head> 
      */}
      <GlobalStyle />
      <Header />
      <Products />
      <Footer />
    </>
  );
}
