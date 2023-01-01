type kitTypeYearsType = {
  range: string;
  basePrice: number;
  image: string;
};

type kitTypesModelsType = {
  name: string;
  years: kitTypeYearsType[];
};

type kitTypesType = {
  id: number;
  make:
    | "Iveco"
    | "Citroen"
    | "Peugeot"
    | "Fiat"
    | "Mercedes"
    | "Ford"
    | "Volkswagen"
    | "Vauxhall"
    | "Nissan";
  models: kitTypesModelsType[];
};

const kitTypes: kitTypesType[] = [
  {
    id: 1,
    make: "Iveco",
    models: [
      {
        name: "Daily 35S-L",
        years: [
          {
            range: "2006-2014",
            basePrice: 39000,
            image: "daily-35s-l-2006-2014.png",
          },
          {
            range: "2015-2022",
            basePrice: 36000,
            image: "daily-35s-l-2015-2022.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    make: "Citroen",
    models: [
      {
        name: "Relay",
        years: [
          {
            range: "1994-2022",
            basePrice: 19900,
            image: "citroen-relay-1994-2022.jpg",
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "citreon-relay-2006-2022.png",
          },
        ],
      },
      {
        name: "C25",
        years: [
          {
            range: "1982-1994",
            basePrice: 28500,
            image: "citreon-relay-1982-1994.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    make: "Peugeot",
    models: [
      {
        name: "Boxer",
        years: [
          {
            range: "1994-2022",
            basePrice: 19900,
            image: "peugeot-boxer-1994-2022.jpg",
          },
          {
            range: "2006-2021",
            basePrice: 44900,
            image: "peugeot-boxer-2006-2021.png",
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "peugeot-boxer-2006-2022.png",
          },
        ],
      },
      {
        name: "J5",
        years: [
          {
            range: "1982-1994",
            basePrice: 28500,
            image: "peugeot-j5-1982-1994.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    make: "Fiat",
    models: [
      {
        name: "Ducato",
        years: [
          {
            range: "1994-2022",
            basePrice: 19900,
            image: "fiat-ducato-1994-2022.jpg",
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "fiat-ducato-2006-2022.png",
          },
          {
            range: "1982-1994",
            basePrice: 28500,
            image: "fiat-ducato-1982-1994.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    make: "Mercedes",
    models: [
      {
        name: "Sprinter",
        years: [
          {
            range: "2006-2022",
            basePrice: 19900,
            image: "mercedes-sprinter-2006-2022.png",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    make: "Ford",
    models: [
      {
        name: "Transit",
        years: [
          {
            range: "2001-2022",
            basePrice: 19900,
            image: "ford-transit-2001-2022.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    make: "Vauxhall",
    models: [
      {
        name: "Movano",
        years: [
          {
            range: "2010-2020",
            basePrice: 20900,
            image: "vauxhall-movano-2010-2020.jpg",
          },
          {
            range: "2017-2022",
            basePrice: 22500,
            image: "vauxhall-movano-2017-2022.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    make: "Volkswagen",
    models: [
      {
        name: "Crafter",
        years: [
          {
            range: "2006-2016",
            basePrice: 19900,
            image: "volkswagen-crafter-2006-2016.png",
          },
          {
            range: "2017-2022",
            basePrice: 29900,
            image: "volkswagen-crafter-2017-2022.png",
          },
          {
            range: "1995-2005",
            basePrice: 42500,
            image: "volkswagen-crafter-1995-2005.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    make: "Nissan",
    models: [
      {
        name: "NV400",
        years: [
          {
            range: "2010-2020",
            basePrice: 20900,
            image: "nissan-nv400-2010-2020.jpg",
          },
        ],
      },
    ],
  },
];

type ShopItemType = "kit" | "gauge" | "air bag" | "accessory";

type ShopItem = {
  id: number;
  type: ShopItemType;
  name: string;
};

const Items: ShopItem[] = [];

export default Items;
