import Head from "next/head";

import styles from "../styles/pages/Partners.module.scss";

const Partners = () => {
  return (
    <>
      <Head>
        <title>Partners - Martech Air-Suspensions Ltd</title>
      </Head>
      <div className={styles.partnersPage}>
        <div className={styles.top}>
          <h1>Our partners</h1>
          <p>
            Here you will find our partners who we value very highly, and work
            with closely.
          </p>
        </div>
        <div className={styles.partnersWrapper}>
          <div className={styles.partner}>
            <h2>Van Weight Engineering</h2>
            <p>
              We are proud to collaborate with Van Weight Engineering, a leading
              provider of van load-raising solutions. Their expertise in
              optimizing van suspensions perfectly complements our air
              suspension systems, enabling us to offer comprehensive solutions
              that enhance both comfort and load capacity. Together, we empower
              businesses to achieve exceptional performance and versatility in
              their transportation operations. By combining our cutting-edge
              technologies and industry knowledge, we are committed to
              delivering exceptional value to our customers, ensuring their vans
              are equipped to handle any challenge with ease.
            </p>
            <a href="https://www.vanweightengineering.com/home" target="_blank">Here is their website.</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
