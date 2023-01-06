import type { NextPage } from "next";
import { useState, useEffect } from "react";

import type { CategoryType, carMaketypes } from "../utils/items";
import { kitTypes } from "../utils/items";

import styles from "../styles/pages/Shop.module.scss";

import Button from "../components/Button/Button";

const Shop: NextPage = () => {
  const itemTypes: CategoryType[] = [
    "all",
    "accessory",
    "air bag",
    "kit",
    "gauge",
  ];
  const [itemType, setItemType] = useState<CategoryType>("all");
  const [kitMake, setKitMake] = useState<carMaketypes>("any");
  const [kitModel, setKitModel] = useState<string>("any");
  const [kitYear, setKitYear] = useState<string>("any");

  useEffect(() => {
    console.log(kitMake);
    console.log(kitModel);
    console.log(kitYear);
    console.log("---");
  }, [kitMake, kitModel, kitYear]);

  return (
    <>
      <section className={styles.shop}>
        <h1>Shop</h1>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div>
              <h2>Filters</h2>
              <p>Select your searching criteria</p>
            </div>
            <div className={styles.selections}>
              <div className={styles.option}>
                <label>Item type</label>
                <select
                  value={itemType}
                  onChange={(e) => {
                    setItemType(e.target.value as CategoryType);
                    setKitMake("any");
                  }}
                >
                  {itemTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {itemType === "kit" && (
                  <>
                    <div className={styles.option}>
                      <label>Make</label>
                      <select
                        value={kitMake}
                        onChange={(e) => {
                          setKitMake(e.target.value as carMaketypes);
                          setKitModel("any");
                          setKitYear("any");
                        }}
                      >
                        <option value={"any"}>Any</option>
                        {kitTypes.map((kitType) => (
                          <option key={kitType.id} value={kitType.make}>
                            {kitType.make}
                          </option>
                        ))}
                      </select>
                    </div>
                    {kitMake !== "any" && (
                      <div className={styles.option}>
                        <label>Model</label>
                        <select
                          value={kitModel}
                          onChange={(e) => {
                            setKitModel(e.target.value);
                            setKitYear("any");
                          }}
                        >
                          <option value="any">Any</option>
                          {kitTypes
                            .find((type) => type.make === kitMake)
                            ?.models.map((model) => (
                              <option key={model.name} value={model.name}>
                                {model.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    )}
                    {kitModel !== "any" && (
                      <div className={styles.option}>
                        <label>Year</label>
                        <select
                          onChange={(e) => {
                            setKitYear(e.target.value);
                          }}
                          value={kitYear}
                        >
                          <option value={"any"}>Any</option>

                          {kitTypes
                            .find((type) => type.make === kitMake)
                            ?.models.find((model) => model.name === kitModel)
                            ?.years.map((year) => (
                              <option key={year.image} value={year.range}>
                                {year.range}
                              </option>
                            ))}
                        </select>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <Button background={true}>Search</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
