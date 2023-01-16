import { useEffect, useState } from "react";

import type { ShopItem } from "./items";

import Items from "./items";

type CartItemType = {
  item: ShopItem;
  amount: number;
};

const useCart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const setItemAmount = (itemId: string, amount: number) => {
    console.log("1");
    let cartCopy = [...cart];
    console.log(itemId);
    let itemExistsInCart = cartCopy.find((i) => i.item.id === itemId);
    console.log(itemExistsInCart);
    if (itemExistsInCart) {
      if (amount === 0) {
        //Remove from cart
        let newCart = cart.filter((i) => i.item.id !== itemId);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        itemExistsInCart.amount = amount;
        setCart(cartCopy);
        localStorage.setItem("cart", JSON.stringify(cartCopy));
      }
    } else {
      let item = Items.find((i) => i.id === itemId) as ShopItem;
      let newCart = [
        ...cart,
        {
          item,
          amount,
        },
      ];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    setCart(
      typeof window !== "undefined" && localStorage.getItem("cart") !== null
        ? JSON.parse(localStorage.getItem("cart") as string)
        : []
    );
  }, []);

  // useEffect(() => {
  //   if (cart.length !== 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart]);

  return { cart, setCart, setItemAmount };
};

export { useCart };
export type { CartItemType };
