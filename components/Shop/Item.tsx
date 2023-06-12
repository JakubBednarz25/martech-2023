import Link from "next/link";
import styles from "./Item.module.scss";

import type { ShopItem } from "../../utils/items";
import { FunctionComponent } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import ItemLabel from "./ItemLabel";

type ItemPropsType = {
  data: ShopItem;
};

const Item: FunctionComponent<ItemPropsType> = ({ data }: ItemPropsType) => {
  return (
    <article className={styles.item}>
      {/* <div className={styles.imageContainer} style={{background: `url(/shop-images/${data.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div> */}
      <div className={styles.imageWrapper}>
        <Image
          src={`/shop-images/${data.image}`}
          alt={data.name}
          sizes="100vw"
          height={0}
          width={0}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            display:'inline-block'
          }}
        />
      </div>
      <ItemLabel type={data.category} />
      <h3>{data.name}</h3>
      <div>
        <p>{`£${(data.totalPrice / 100).toFixed(2)}`}</p>
        <p>
          <span>Excl. tax</span>
          {`£${(data.totalPrice / 120).toFixed(2)}`}
        </p>
      </div>
      <Button background={true}>
        <Link href={`/item/${data.id}`}>View</Link>
      </Button>
    </article>
  );
};

export default Item;
