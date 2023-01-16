import "../styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Head from "next/head";

import { CartContext } from "../utils/CartContext";
import { useCart } from "../utils/Hooks";
import { useContext, useMemo } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { cart, setCart, setItemAmount } = useCart();
  const providerCart = useMemo(() => {
    console.log(cart);
    return { cart, setCart, setItemAmount };
  }, [cart, setCart]);
  return (
    <>
      <Header />
      <CartContext.Provider value={providerCart}>
        <main className="page">
          <Component {...pageProps} />
        </main>
      </CartContext.Provider>
      <Footer />
    </>
  );
}

export default MyApp;
