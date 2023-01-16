import Items from "../../utils/items";
import type { ShopItem } from "../../utils/items";

import styles from "../../styles/pages/Item.module.scss";
import { FunctionComponent } from "react";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import ItemLabel from "../../components/Shop/ItemLabel";
import { StyleRegistry } from "styled-jsx";
import Button from "../../components/Button/Button";
import Link from "next/link";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.params as IParams;
  console.log(id);
  const foundItem = Items.find((item) => item.id === id);
  return {
    props: {
      item: foundItem,
    },
  };
};

type ItemPageProps = {
  item: ShopItem;
};

const Item: FunctionComponent<ItemPageProps> = ({ item }) => {
  return (
    <>
      <Head>
        <title>{`${item.name} - Martech Air-Suspensions Ltd`}</title>
      </Head>
      <div className={styles.container}>
        <section className={styles.imageContainer}>
          <img src={`/shop-images/${item.image}`} alt={item.name} />
        </section>
        <section className={styles.description}>
          <div className={styles.part}>
            <h1>{item.name}</h1>
            {item.category === "kit" && (
              <p className={styles.certText}>Safety B Certified</p>
            )}
            <ItemLabel type={item.category} />
          </div>
          <div className={styles.part}>
            <span className={styles.price}>{`£${(item.totalPrice / 100).toFixed(
              2
            )}`}</span>
            <span className={styles.excludingTaxPrice}>
              <p>Excl. tax</p>
              {`£${(item.totalPrice / 120).toFixed(2)}`}
            </span>
          </div>
          {item.category === "kit" && (
            <>
              <div className={styles.part}>
                <div className={styles.property}>
                  <b>Make/Model</b>
                  <p>{`${item.subCategories?.make} ${item.subCategories?.model}`}</p>
                </div>
                <div className={styles.property}>
                  <b>Year</b>
                  <p>{item.subCategories?.range}</p>
                </div>
                <div className={styles.property}>
                  <b>Body Type</b>
                  <p>Panel van, tipper, motorhome, camper, box van..</p>
                </div>
                <div className={styles.property}>
                  <b>Chassis Type</b>
                  <p>All standard type Chassis</p>
                </div>
              </div>
              <div className={styles.part}>
                <h2>The kit includes</h2>
                <ul>
                  <li>Fully galvanised heavy duty steel brackets</li>
                  <li>
                    2x 170/2 RUBENA heavy duty air springs (4000kg load per
                    pair)
                  </li>
                  <li>Box with gauge and valve</li>
                  <li>8 metre air line</li>
                  <li>2x T Joint</li>
                  <li>Bolts</li>
                  <li>Fitting guide</li>
                </ul>
              </div>
            </>
          )}
          <div className={styles.addToCart}>
            <div className={styles.select}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <Button background={true}>Add to Cart</Button>
            </div>
            <label>OR</label>
            <Button background={false}>
              <a target="_blank" href={item.ebay} rel="noopener noreferrer">
                View on eBay
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Item;
