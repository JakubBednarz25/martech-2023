import styles from "./Item.module.scss";

import type { ShopItem } from "../../utils/items";
import { FunctionComponent } from "react";
import Image from "next/image";
import Button from "../Button/Button";

type ItemPropsType = {
  data: ShopItem;
};

const Item: FunctionComponent<ItemPropsType> = ({ data }: ItemPropsType) => {
  console.log(data);
  return (
    <article className={styles.item}>
      <Image
        src={`/shop-images/${data.image}`}
        alt={data.name}
        width={250}
        height={150}
      />
      <label>{data.category}</label>
      <h3>{data.name}</h3>
      <div>
        <p>{`£${(data.totalPrice / 100).toFixed(2)}`}</p>
        <p>
          <span>Excl. tax</span>
          {`£${(data.totalPrice / 120).toFixed(2)}`}
        </p>
      </div>
      <Button background={true}>View</Button>
    </article>
  );
};

export default Item;
