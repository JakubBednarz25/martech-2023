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
    return { cart, setCart, setItemAmount };
  }, [cart, setCart]);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Air suspension, Air Spring, Spring, Air bags, Cylinder, Hopping, Dunlop, X230, X244, X250, X295, X290, X63, X70
			Renault, Master, Citroen, Relay, Boxer, movano, viair,  
			lift suspension, drop, lower,   electric, pnumatic, airbag, air bag, airstrut, air strut, 
			firestone, airbagit, airride, airide, air ride technologies, ridetech, driverite, Mini, BMW MINI, PT Cruiser, Celica, Toyota, 
			Mercedes, CE, Saxo, 206, Megane, solenoids, switches, air line, airline, adjustable, suspension, FB, FBSS, airvalves, 
			air valve, relay, solenoid valve, solenoid, circuit breaker, gauges, digital, switch box, switchbox, airhose, ride leveler, 
			pneumatic, filter, air strut, air struts, airspring, airsprings, air spring, air springs, airstruts, airshocks, fbss, air lift, 
			airlift, airride technologies, airride technology, riderite, firestone airbags, firestone air bags, fbi, showtime hydraulics, 
			rayvern hydraulics, viar, truckin, suspension kit, air suspension kit, Hotrod, Streetrod, install, fit, ridetech, airliftcompany, 
			car air suspension, hydraulic suspension kit, plush"
        />
        <meta
          name="description"
          content="The Main UK Based Martech Air Suspensions Ltd Distributor & Specialist. Shop for Martech Air suspension kits for cars, vans, motorhomes, pick-ups and a full range of components."
        />
        <meta property="og:description" content="The Main UK Based Martech Air Suspensions Ltd Distributor & Specialist. Shop for Martech Air suspension kits for cars, vans, motorhomes, pick-ups and a full range of components." />
        <meta property="og:image" content="/logo.png" />
      </Head>
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
