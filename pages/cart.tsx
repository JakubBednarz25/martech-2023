import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContext";

import styles from "../styles/pages/Cart.module.scss";
import type { ICart } from "../utils/CartContext";
import Button from "../components/Button/Button";
import Head from "next/head";
import Notification from "../components/Notification/Notification";

const Cart: NextPage = () => {
  const { cart, setCart, setItemAmount } = useContext(CartContext) as ICart;
  const [notifVisible, setNotifVisible] = useState<boolean>(false);
  const [lastRemovedItem, setLastRemovedItem] = useState<string>("");
  console.log(cart);

  useEffect(() => {
    if (lastRemovedItem !== "") {
      setNotifVisible(true);
    }
  }, [lastRemovedItem]);
  return (
    <>
      <Head>
        <title>Your cart - Martech Air-Suspensions Ltd</title>
      </Head>
      <div className={styles.container}>
        <h1>Your Cart</h1>
        <div className={styles.itemsAndCheckout}>
          <div className={styles.itemsContainer}>
            <div className={styles.dividerContainer}>
              <p>Price</p>
              <div className={styles.divider}></div>
            </div>
            {notifVisible && (
              <Notification type={"warning"}>
                {`${lastRemovedItem} was removed from your cart.`}
              </Notification>
            )}
            {cart !== null && cart.length !== 0 ? (
              <>
                {cart.map((cartItem) => (
                  <div key={cartItem.item.id} className={styles.cartItem}>
                    <img
                      src={`/shop-images/${cartItem.item.image}`}
                      alt={cartItem.item.name}
                    />
                    <div className={styles.details}>
                      <div className={styles.info}>
                        <p>{cartItem.item.name}</p>
                        <div className={styles.changeAmount}>
                          <select
                            onChange={(e) => {
                              setItemAmount(
                                cartItem.item.id,
                                parseInt(e.target.value)
                              );
                            }}
                            value={cartItem.amount}
                          >
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                            <option value="6">Qty: 6</option>
                            <option value="7">Qty: 7</option>
                            <option value="8">Qty: 8</option>
                            <option value="9">Qty: 9</option>
                            <option value="10">Qty: 10</option>
                          </select>
                          <div className={styles.separator}></div>
                          <a
                            onClick={() => {
                              setItemAmount(cartItem.item.id, 0);
                              setLastRemovedItem(cartItem.item.name);
                            }}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                      <span>{`£${(
                        (cartItem.item.totalPrice * cartItem.amount) /
                        100
                      ).toFixed(2)}`}</span>
                    </div>
                  </div>
                ))}
                <div className={styles.subTotal}>
                  {" "}
                  <p>
                    {`Subtotal (${cart.reduce(
                      (currentValue, cartItem) =>
                        currentValue + cartItem.amount,
                      0
                    )} item(s)):`}
                    <b>{`£${cart
                      .reduce(
                        (currentValue, cartItem) =>
                          currentValue +
                          (cartItem.amount * cartItem.item.totalPrice) / 100,
                        0
                      )
                      .toFixed(2)}`}</b>
                  </p>
                </div>
              </>
            ) : (
              <p className={styles.emptyCartMessage}>Your cart is empty.</p>
            )}
          </div>
          <div className={styles.checkout}>
            <p>
              {`Subtotal (${cart.reduce(
                (currentValue, cartItem) => currentValue + cartItem.amount,
                0
              )} item(s)):`}
              <b>{`£${cart
                .reduce(
                  (currentValue, cartItem) =>
                    currentValue +
                    (cartItem.amount * cartItem.item.totalPrice) / 100,
                  0
                )
                .toFixed(2)}`}</b>
            </p>
            <i>Subtotal includes VAT of 20%</i>
            <div>
              <i>
                Checkout feature is not functional yet. if you want to purchase
                a kit/item please head over to the eBay shop or contact us at:
              </i>
              <i>Mob: 07715129997</i>
              <i>Email: martechuk85@gmail.com</i>
            </div>
            <Button background={true}>Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
