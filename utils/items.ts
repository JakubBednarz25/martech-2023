type kitTypeYearsType = {
  range: string;
  basePrice: number;
  image: string;
  ebay: string;
};

type kitTypesModelsType = {
  name: string;
  years: kitTypeYearsType[];
};

type carMaketypes =
  | "any"
  | "Iveco"
  | "Citroen"
  | "Peugeot"
  | "Fiat"
  | "Mercedes"
  | "Ford"
  | "Volkswagen"
  | "Vauxhall"
  | "Nissan";

type kitTypesType = {
  id: number;
  make: carMaketypes;
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
            ebay: "https://www.ebay.co.uk/itm/264711403385?hash=item3da2077779:g:T9oAAOSw1e1jsIa0"
          },
          {
            range: "2015-2022",
            basePrice: 36000,
            image: "daily-35s-l-2015-2022.jpg",
            ebay: "https://www.ebay.co.uk/itm/265183149541?hash=item3dbe25bde5:g:p-wAAOSwEglgt~Lg"
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
            ebay: "https://www.ebay.co.uk/itm/264702730560?hash=item3da1832140:g:evQAAOSwChpfMC5y",
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "citreon-relay-2006-2022.png",
            ebay: "https://www.ebay.co.uk/itm/265183167561?hash=item3dbe260449:g:WjEAAOSwxvtgt~fg"
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
            ebay: "https://www.ebay.co.uk/itm/264771303154?hash=item3da59976f2:g:8xUAAOSw049e5oTv"
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
            ebay: "https://www.ebay.co.uk/itm/264702730063?hash=item3da1831f4f:g:u~YAAOSwh4ZfMC0z",
          },
          {
            range: "2006-2021",
            basePrice: 44900,
            image: "peugeot-boxer-2006-2021.png",
            ebay: "https://www.ebay.co.uk/itm/264771146415?hash=item3da59712af:g:4oIAAOSw5OdjcrUe"
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "peugeot-boxer-2006-2022.png",
            ebay: "https://www.ebay.co.uk/itm/265183166007?hash=item3dbe25fe37:g:AiQAAOSwZohgt~cF"
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
            ebay: "https://www.ebay.co.uk/itm/265321715871?hash=item3dc668189f:g:8xUAAOSw049e5oTv"
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
            ebay: "https://www.ebay.co.uk/itm/264702734311?hash=item3da1832fe7:g:aH4AAOSwqEVfMCye",
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "fiat-ducato-2006-2022.png",
            ebay: "https://www.ebay.co.uk/itm/265183168510?hash=item3dbe2607fe:g:s0cAAOSw~s5gt~hd"
          },
          {
            range: "1982-1994",
            basePrice: 28500,
            image: "fiat-ducato-1982-1994.jpg",
            ebay: "https://www.ebay.co.uk/itm/264764045826?hash=item3da52aba02:g:8xUAAOSw049e5oTv"
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
            ebay: "https://www.ebay.co.uk/itm/264724622618?hash=item3da2d12d1a:g:2xUAAOSwEwVjrH4g"
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
            ebay: "https://www.ebay.co.uk/itm/264711399386?hash=item3da20767da:g:8EcAAOSwCGZiybdu"
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
            ebay: "https://www.ebay.co.uk/itm/264704920098?hash=item3da1a48a22:g:Pg8AAOSwU~Vga4ms"
          },
          {
            range: "2017-2022",
            basePrice: 22500,
            image: "vauxhall-movano-2017-2022.jpg",
            ebay: "https://www.ebay.co.uk/itm/264704893314?hash=item3da1a42182:g:p8sAAOSwKBBhsIkC"
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
            ebay: "https://www.ebay.co.uk/itm/264687244880?hash=item3da096d650:g:ci4AAOSwFdFjfSAN"
          },
          {
            range: "2017-2022",
            basePrice: 29900,
            image: "volkswagen-crafter-2017-2022.png",
            ebay: "https://www.ebay.co.uk/itm/264756296933?hash=item3da4b47ce5:g:010AAOSw7nJjrsax"
          },
          {
            range: "1995-2005",
            basePrice: 42500,
            image: "volkswagen-crafter-1995-2005.jpg",
            ebay: "https://www.ebay.co.uk/itm/264888179723?hash=item3dac90dc0b:g:xKoAAOSwO2BeXBk~"
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
            ebay: "https://www.ebay.co.uk/itm/264704924741?hash=item3da1a49c45:g:AdgAAOSwmcpga4tA"
          },
        ],
      },
    ],
  },
];

type CategoryType = "all" | "kit" | "gauge" | "air bag" | "accessory";

type ShopItem = {
  id: string;
  name: string;
  category: CategoryType;
  subCategories: {
    make: carMaketypes;
    model: string;
    range: string;
  } | null;
  totalPrice: number;
  image: string;
  ebay: string;
};

const Items: ShopItem[] = [];

(function addAllkits() {
  for (let kit of kitTypes) {
    for (let model of kit.models) {
      for (let year of model.years) {
        Items.push({
          id: `${kit.make}-${model.name}-${year.range}-${year.basePrice}`,
          name: `${kit.make} ${model.name} Air Suspension Kit ${year.range}`,
          category: "kit",
          subCategories: {
            make: kit.make,
            model: model.name,
            range: year.range,
          },
          totalPrice: year.basePrice,
          image: year.image,
          ebay: year.ebay,
        });
      }
    }
  }
  Items.push({
    id: "schrader-valve",
    name: "Air line Schrader Valve",
    category: "accessory",
    subCategories: null,
    totalPrice: 1149,
    image: "schrader-valve.png",
    ebay: "https://www.ebay.co.uk/itm/264746301417?hash=item3da41bf7e9:g:TcwAAOSw3aFhpoxh"
  });
  Items.push({
    id: "electric-paddle-valve-switch",
    name: "Electric Paddle Valve Switch",
    category: "accessory",
    subCategories: null,
    totalPrice: 2099,
    image: "electric-switch.jpg",
    ebay: "https://www.ebay.co.uk/itm/264704867605?hash=item3da1a3bd15:g:27oAAOSwRRNhmsDW"
  });
  Items.push({
    id: "universal-air-suspension-gauge",
    name: "Single Gauge Box",
    category: "gauge",
    subCategories: null,
    totalPrice: 2500,
    image: "single-gauge.png",
    ebay: "https://www.ebay.co.uk/itm/265405278320?hash=item3dcb632870:g:6YUAAOSw4fBjcBDl"
  });
  Items.push({
    id: "manual-paddle-switch",
    name: "Manual Paddle Switch",
    category: "accessory",
    subCategories: null,
    totalPrice: 3599,
    image: "manual-paddle-switch.jpg",
    ebay: "https://www.ebay.co.uk/itm/264771104736?hash=item3da5966fe0:g:K6MAAOSwwwdirjT~"
  });
  Items.push({
    id: "single-gauge-panel",
    name: "Single Gauge Panel",
    category: "gauge",
    subCategories: null,
    totalPrice: 4800,
    image: "silver-gauge.jpg",
    ebay: "https://www.ebay.co.uk/itm/264733960167?hash=item3da35fa7e7:g:fIQAAOSwCpxizGkH"
  });
  Items.push({
    id: "black-gauge",
    name: "Single gauge Panel Rocker Switch",
    category: "gauge",
    subCategories: null,
    totalPrice: 4999,
    image: "black-gauge.png",
    ebay: "https://www.ebay.co.uk/itm/265354667796?hash=item3dc85ee714:g:hNsAAOSwLv9iyaf8"
  });
  Items.push({
    id: "air-bag",
    name: "RUBENA Air-Bag 170/2",
    category: "air bag",
    subCategories: null,
    totalPrice: 6500,
    image: "air-bag.png",
    ebay: "https://www.ebay.co.uk/itm/264704951118?hash=item3da1a5034e:g:tCgAAOSwKnNjIvCd"
  });
  Items.push({
    id: "4x-manual-padle",
    name: "4x Manual Paddle Valve Switch",
    category: "accessory",
    subCategories: null,
    totalPrice: 7200,
    image: "single-button.jpg",
    ebay: "https://www.ebay.co.uk/itm/265797994593?hash=item3de2cb8861:g:27oAAOSwRRNhmsDW"
  });
  Items.push({
    id: "double-gauge",
    name: "Twin Gauge Panel 2x",
    category: "gauge",
    subCategories: null,
    totalPrice: 9900,
    image: "double-gauge.png",
    ebay: "https://www.ebay.co.uk/itm/265055949232?hash=item3db690d1b0:g:lQQAAOSwfOxirjAa"
  });
})();

export default Items;
export { kitTypes };
export type { ShopItem, CategoryType, carMaketypes };
