import type { NextPage } from "next";
import styles from "../styles/pages/Home.module.scss";

import Button from "../components/Button/Button";
import Item from "../components/Shop/Item";

import Items from "../utils/items";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Martech Air-Suspensions Ltd</title>
      </Head>
      <section className={styles.hero}>
        <h1>
          Light commercial and leisure vehicles air suspension specialists
        </h1>
        <p>
          Martech air suspensions ltd is a leading vehicle air suspension kit
          manufacturer and distributor with years of experience, providing you
          with the best service.
        </p>
        <div className={styles.ebayProof}>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M606 189.5l-54.8 109.9-54.9-109.9h-37.5l10.9 20.6c-11.5-19-35.9-26-63.3-26-31.8 0-67.9 8.7-71.5 43.1h33.7c1.4-13.8 15.7-21.8 35-21.8 26 0 41 9.6 41 33v3.4c-12.7 0-28 .1-41.7.4-42.4.9-69.6 10-76.7 34.4 1-5.2 1.5-10.6 1.5-16.2 0-52.1-39.7-76.2-75.4-76.2-21.3 0-43 5.5-58.7 24.2v-80.6h-32.1v169.5c0 10.3-.6 22.9-1.1 33.1h31.5c.7-6.3 1.1-12.9 1.1-19.5 13.6 16.6 35.4 24.9 58.7 24.9 36.9 0 64.9-21.9 73.3-54.2-.5 2.8-.7 5.8-.7 9 0 24.1 21.1 45 60.6 45 26.6 0 45.8-5.7 61.9-25.5 0 6.6.3 13.3 1.1 20.2h29.8c-.7-8.2-1-17.5-1-26.8v-65.6c0-9.3-1.7-17.2-4.8-23.8l61.5 116.1-28.5 54.1h35.9L640 189.5zM243.7 313.8c-29.6 0-50.2-21.5-50.2-53.8 0-32.4 20.6-53.8 50.2-53.8 29.8 0 50.2 21.4 50.2 53.8 0 32.3-20.4 53.8-50.2 53.8zm200.9-47.3c0 30-17.9 48.4-51.6 48.4-25.1 0-35-13.4-35-25.8 0-19.1 18.1-24.4 47.2-25.3 13.1-.5 27.6-.6 39.4-.6zm-411.9 1.6h128.8v-8.5c0-51.7-33.1-75.4-78.4-75.4-56.8 0-83 30.8-83 77.6 0 42.5 25.3 74 82.5 74 31.4 0 68-11.7 74.4-46.1h-33.1c-12 35.8-87.7 36.7-91.2-21.6zm95-21.4H33.3c6.9-56.6 92.1-54.7 94.4 0z" />
            </svg>
            4,700+ Units Sold
          </p>
          <p>
            Over 360 positive reviews on eBay, with 99,7% positive feedback.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button background={true}>
            <Link href="/shop">View suspension kits</Link>
          </Button>
          <Button background={true}>
            <Link href="/installation">Installation Services</Link>
          </Button>
        </div>
      </section>
      <section className={styles.infoPicture}>
        <div className={styles.textPart}>
          <h2>Our services</h2>
          <div className={styles.paragraphs}>
            <p>
              We provide high quality vehicle air suspension kits, designed for
              a range of different vehicle brands and types. Our kits use
              premium RUBENA airbags, which are famous all around the world for
              their excellent quality.
            </p>
            <p>
              Our kits are professionally designed, and are perfect to the
              millimetre, allowing for easy self-installation and management.
              The metal used for the mounting brackets is high grade steel, the
              benefit of that being the very long lifespan of the equipment.
            </p>
            <ul>
              <p>We produce air suspension kits for the following:</p>
              <li>Motorhomes</li>
              <li>Campervans</li>
              <li>Vans</li>
              <li>Flatbeds</li>
              <li>Dropsites</li>
              <li>Chassis Cabs</li>
              <li>Recovery Trucks</li>
            </ul>
            <p>
              We have multiple installation points in the UK, you can find them
              here.
            </p>
          </div>
          <div className={styles.contactInfo}>
            <label>Email: martechuk85@gmail.com</label>
            <label>Mobile: 07715129997</label>
          </div>
        </div>
        <picture>
          <source srcSet="/landing-page-suspension.png" />
          <img
            src="/landing-page-suspension.png"
            alt="Image of Martech air suspension fitted"
          />
        </picture>
      </section>
      <section className={styles.featuredKits}>
        <h2>Featured Kits</h2>
        <div className={styles.itemsWrapper}>
          {Items.slice(0, 5).map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
