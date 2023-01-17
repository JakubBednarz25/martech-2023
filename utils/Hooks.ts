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
    let itemExistsInCart = cartCopy.find((i) => {
      console.log(i);
      return i.item.id === itemId;
    });
    console.log("2");
    console.log(itemExistsInCart);
    console.log("3");
    if (itemExistsInCart) {
      console.log("4");
      if (amount === 0) {
        console.log("5");
        //Remove from cart
        let newCart = cart.filter((i) => i.item.id !== itemId);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        console.log("6");
        itemExistsInCart.amount = amount;
        setCart(cartCopy);
        localStorage.setItem("cart", JSON.stringify(cartCopy));
      }
    } else {
      console.log("7");
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
    console.log("8");    
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
