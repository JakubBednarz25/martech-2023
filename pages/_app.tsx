import "../styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="page">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
