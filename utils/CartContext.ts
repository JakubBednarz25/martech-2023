import { createContext, useMemo } from "react";
import { useCart } from "./Hooks";

import type { CartItemType } from "./Hooks";

// const { cart, setCart, setItemAmount } = useCart();

interface ICart {
  cart: CartItemType[];
  setCart: (cart: CartItemType[]) => void;
  setItemAmount: (itemId: string, amount: number) => void;
}

export const CartContext = createContext<ICart | null>(null);

export type { ICart };
