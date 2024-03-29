import Items from "../../utils/items";
import type { ShopItem } from "../../utils/items";

import styles from "../../styles/pages/Item.module.scss";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import ItemLabel from "../../components/Shop/ItemLabel";
import { StyleRegistry } from "styled-jsx";
import Button from "../../components/Button/Button";
import Link from "next/link";
import { CartContext, ICart } from "../../utils/CartContext";
import Notification from "../../components/Notification/Notification";

interface IParams extends ParsedUrlQuery {
  id: string;
}

type CustomOption = {
  id: number;
  name: string;
  price: number;
};

const customOptions: CustomOption[] = [
  {
    id: 1,
    name: "Compressor",
    price: 2000,
  },
  {
    id: 2,
    name: "Twin gauge",
    price: 3000,
  },
  {
    id: 3,
    name: "Full",
    price: 5000,
  },
];

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
  const { cart, setCart, setItemAmount } = useContext(CartContext) as ICart;
  const [notifVisible, setNotifVisible] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setNotifVisible(false);
  }, [quantity]);
  return (
    <>
      <Head>
        <title>{`${item.name} ${
          item.category === "kit" && "Air Suspension Kit"
        } - Martech Air-Suspensions Ltd`}</title>
      </Head>
      <div className={styles.container}>
        <section className={styles.imageContainer}>
          <img src={`/shop-images/${item.image}`} alt={item.name} />
        </section>
        <section className={styles.description}>
          <div className={styles.part}>
            <h1>{`${item.name}`}</h1>
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
              {/* <div className={styles.part}>
                <h2>Customize</h2>
                <div className={styles.customOptions}>
                  {customOptions.map((customOption) => (
                    <div className={styles.customOption}>
                      <h3>{customOption.name}</h3>
                      <b>{`+ £${(customOption.price / 100).toFixed(2)}`}</b>
                    </div>
                  ))}
                </div>
              </div> */}
            </>
          )}
          {notifVisible && (
            <Notification type={"success"}>
              {`${quantity} item(s) added.`}
              <Link href="/cart">View Cart</Link>
            </Notification>
          )}
          {/* <div className={styles.addToCart}>
            <div className={styles.select}>
              <select
                value={quantity}
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value));
                }}
              >
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
              <Button
                background={true}
                action={() => {
                  setItemAmount(item.id, quantity);
                  setNotifVisible(true);
                }}
              >
                Add to Cart
              </Button>
            </div>
            <label>OR</label>
            <Button background={false}>
              <a target="_blank" href={item.ebay} rel="noopener noreferrer">
                View on eBay
              </a>
            </Button>
          </div> */}
          {/* <div className={styles.part}>
            <h2>Variants</h2>
            <div className={styles.variants}>
              <div className={styles.variant}>
                <Button background={false}>
                  <a target="_blank" href={item.ebay} rel="noopener noreferrer">
                    Standard
                  </a>
                </Button>
              </div>
              <div className={styles.variant}>
                <Button background={false}>
                  <a target="_blank" href={"https://www.ebay.co.uk/itm/265183150810?hash=item3dbe25c2da:g:nGIAAOSwed5iJksO"} rel="noopener noreferrer">
                    + 12V Compressor
                  </a>
                </Button>
              </div>
            </div>
          </div> */}
          <Button background={false}>
            <a target="_blank" href={item.ebay} rel="noopener noreferrer">
              Buy on eBay
            </a>
          </Button>
        </section>
      </div>
    </>
  );
};

export default Item;
