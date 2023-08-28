type extraOptions = "Compressor" | "Twin Gauge" | "Compressor & Twin Gauge" | "Switches";

type extraOptionsWrapper = {
  option: extraOptions;
  price: number;
  image: string;
  ebay: string;
};

type kitTypeYearsType = {
  range: string;
  basePrice: number;
  image: string;
  ebay: string;
  options: extraOptionsWrapper[];
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
            basePrice: 22500,
            image: "daily-35s-l-2006-2014.png",
            ebay: "https://www.ebay.co.uk/itm/264711403385?hash=item3da2077779:g:T9oAAOSw1e1jsIa0",
            options: [],
          },
          {
            range: "2015-2022",
            basePrice: 36000,
            image: "daily-35s-l-2015-2022.jpg",
            ebay: "https://www.ebay.co.uk/itm/265183149541?hash=item3dbe25bde5:g:p-wAAOSwEglgt~Lg",
            options: [
              {
                option: "Compressor",
                price: 3000,
                ebay: "https://www.ebay.co.uk/itm/265183150810?hash=item3dbe25c2da:g:nGIAAOSwed5iJksO",
                image: "daily-35s-l-2015-2022-compressor.jpg",
              },
            ],
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
            basePrice: 20900,
            image: "citroen-relay-1994-2022.jpg",
            ebay: "https://www.ebay.co.uk/itm/264702730560?hash=item3da1832140:g:evQAAOSwChpfMC5y",
            options: [
              {
                option: "Compressor",
                price: 4600,
                ebay: "https://www.ebay.co.uk/itm/264733981969?hash=item3da35ffd11:g:oQgAAOSwDApiN6yZ",
                image: "citroen-relay-1994-2022-compressor.png",
              },
              {
                option: "Twin Gauge",
                price: 21000,
                ebay: "https://www.ebay.co.uk/itm/264733973200?hash=item3da35fdad0:g:i~cAAOSwxxtihVxa",
                image: "citroen-relay-1994-2022-twin.png",
              },
            ],
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "citreon-relay-2006-2022.png",
            ebay: "https://www.ebay.co.uk/itm/265183167561?hash=item3dbe260449:g:WjEAAOSwxvtgt~fg",
            options: [
              {
                option: "Switches",
                price: 13000,
                ebay: "https://www.ebay.co.uk/itm/264771102690?hash=item3da59667e2:g:NzAAAOSw4bNjcrSZ",
                image: "citreon-relay-2006-2022-switches.png",
              },
            ],
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
            ebay: "https://www.ebay.co.uk/itm/264771303154?hash=item3da59976f2:g:8xUAAOSw049e5oTv",
            options: [],
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
            basePrice: 20900,
            image: "peugeot-boxer-1994-2022.jpg",
            ebay: "https://www.ebay.co.uk/itm/264702730063?hash=item3da1831f4f:g:u~YAAOSwh4ZfMC0z",
            options: [
              {
                option: "Compressor",
                price: 4600,
                image: "peugeot-boxer-1994-2022-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/264711401498?hash=item3da207701a:g:cyoAAOSwx2liN6s4",
              },
            ],
          },
          {
            range: "2006-2021",
            basePrice: 46900,
            image: "peugeot-boxer-2006-2021.png",
            ebay: "https://www.ebay.co.uk/itm/264771146415?hash=item3da59712af:g:4oIAAOSw5OdjcrUe",
            options: [],
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "peugeot-boxer-2006-2022.png",
            ebay: "https://www.ebay.co.uk/itm/265183166007?hash=item3dbe25fe37:g:AiQAAOSwZohgt~cF",
            options: [
              {
                option: "Twin Gauge",
                price: 8000,
                image: "peugeot-boxer-2006-2022-twin.png",
                ebay: "https://www.ebay.co.uk/itm/264733983034?hash=item3da360013a:g:FyUAAOSwIUJihVro",
              },
            ],
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
            ebay: "https://www.ebay.co.uk/itm/265321715871?hash=item3dc668189f:g:8xUAAOSw049e5oTv",
            options: [],
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
            basePrice: 20900,
            image: "fiat-ducato-1994-2022.jpg",
            ebay: "https://www.ebay.co.uk/itm/264702734311?hash=item3da1832fe7:g:aH4AAOSwqEVfMCye",
            options: [
              {
                option: "Compressor",
                price: 4600,
                image: "fiat-ducato-1994-2022-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/264711410633?hash=item3da20793c9:g:gqIAAOSwM91iN6vg",
              },
            ],
          },
          {
            range: "2006-2022",
            basePrice: 33900,
            image: "fiat-ducato-2006-2022.png",
            ebay: "https://www.ebay.co.uk/itm/265183168510?hash=item3dbe2607fe:g:s0cAAOSw~s5gt~hd",
            options: [
              {
                option: "Twin Gauge",
                price: 13000,
                image: "fiat-ducato-2006-2022-twin.png",
                ebay: "https://www.ebay.co.uk/itm/264733984833?hash=item3da3600841:g:ZC8AAOSwYZxjcq~5",
              },
            ],
          },
          {
            range: "1982-1994",
            basePrice: 28500,
            image: "fiat-ducato-1982-1994.jpg",
            ebay: "https://www.ebay.co.uk/itm/264764045826?hash=item3da52aba02:g:8xUAAOSw049e5oTv",
            options: [],
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
            range: "2006-2023 RWD",
            basePrice: 20900,
            image: "mercedes-sprinter-2006-2022.png",
            ebay: "https://www.ebay.co.uk/itm/264724622618?hash=item3da2d12d1a:g:2xUAAOSwEwVjrH4g",
            options: [
              {
                option: "Compressor",
                price: 6000,
                image: "mercedes-sprinter-2006-2022-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/264733958086?hash=item3da35f9fc6:g:R74AAOSwXrFjfRXz"
              },
              {
                option: "Twin Gauge",
                price: 5600,
                image: "mercedes-sprinter-2006-2022-twin.png",
                ebay: "https://www.ebay.co.uk/itm/264756289635?hash=item3da4b46063:g:QU0AAOSwrK1jfRke",
              }
            ],
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
            range: "RWD 2001-2022",
            basePrice: 20900,
            image: "ford-transit-2001-2022.jpg",
            ebay: "https://www.ebay.co.uk/itm/264711399386?hash=item3da20767da:g:8EcAAOSwCGZiybdu",
            options: [
              {
                option: "Compressor",
                price: 6000,
                image: "ford-transit-2001-2022-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/264733970872?hash=item3da35fd1b8:g:LUwAAOSwXgJjsqOX"
              }
            ],
          },
          {
            range: "2012-2022",
            basePrice: 20900,
            image: "ford-transit-2012-2022.png",
            ebay: "https://www.ebay.co.uk/itm/264733968490?hash=item3da35fc86a:g:5UIAAOSwhoJjsrzq",
            options: [
              {
                option: "Compressor",
                price: 6600,
                image: "ford-transit-2012-20220-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/265183160866?hash=item3dbe25ea22:g:n-cAAOSwwX1jsr~3"
              }
            ]
          },
          {
            range: "Single RWD 2014-2023",
            basePrice: 20900,
            image: "ford-transit-2014-2023-single-rear.png",
            ebay: "https://www.ebay.co.uk/itm/264687244881?hash=item3da096d651:g:wFAAAOSwb4NjsrDa",
            options: [
              {
                option: "Compressor",
                price: 6600,
                image: "ford-transit-2014-2023-single-rear-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/265183147045?hash=item3dbe25b425:g:TqsAAOSwgKZjsqoN"
              }
            ]
          },
          {
            range: "FWD 2014-2023",
            basePrice: 27500,
            image: "ford-transit-2014-2023-single-front.png",
            ebay: "https://www.ebay.co.uk/itm/265819837028?hash=item3de418d264:g:th8AAOSwQwFjstfI",
            options: [
            ]
          }
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
            ebay: "https://www.ebay.co.uk/itm/264704920098?hash=item3da1a48a22:g:Pg8AAOSwU~Vga4ms",
            options: [
              {
                option: "Compressor",
                price: 4600,
                image: "vauxhall-movano-2010-2020-compressor.jpg",
                ebay: "https://www.ebay.co.uk/itm/264704893314?hash=item3da1a42182:g:p8sAAOSwKBBhsIkC"
              }
            ],
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
            range: "2006-2016 4000Kg",
            basePrice: 20900,
            image: "volkswagen-crafter-2006-2016.png",
            ebay: "https://www.ebay.co.uk/itm/264687244880?hash=item3da096d650:g:ci4AAOSwFdFjfSAN",
            options: [
              {
                option: "Compressor",
                price: 6000,
                image: "volkswagen-crafter-2006-2016-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/264733954584?hash=item3da35f9218:g:FDsAAOSwfpZjfSDz"
              },
              {
                option: "Compressor & Twin Gauge",
                price: 12000,
                image: "volkswagen-crafter-2006-2016-twin-compressor.png",
                ebay: "https://www.ebay.co.uk/itm/264711405835?hash=item3da207810b:g:~6kAAOSwm95jiGUX"
              }
            ],
          },
          {
            range: "2006-2016 5000Kg",
            basePrice: 39900,
            image: "volkswagen-crafter-2006-2016-5T.png",
            ebay:"https://www.ebay.co.uk/itm/266046947860?hash=item3df1a24214:g:T28AAOSwC9tjn22K",
            options: []
          },
          {
            range: "2017-2022",
            basePrice: 29900,
            image: "volkswagen-crafter-2017-2022.png",
            ebay: "https://www.ebay.co.uk/itm/264756296933?hash=item3da4b47ce5:g:010AAOSw7nJjrsax",
            options: [
              {
                option: "Compressor",
                price: 5600,
                ebay: "https://www.ebay.co.uk/itm/264756295286?hash=item3da4b47676:g:VCMAAOSwydJjrss8",
                image: "volkswagen-crafter-2017-2022-compressor.png"
              }
            ],
          },          {
            range: "2017-2023",
            basePrice: 30900,
            image: "volkswagen-crafter-2017-2023.png",
            ebay: "https://www.ebay.co.uk/itm/266229231012?hash=item3dfc7fada4:g:nQoAAOSwJuhkQt8W",
            options: [
              {
                option: "Compressor",
                price: 5600,
                ebay: "https://www.ebay.co.uk/itm/264756295286?hash=item3da4b47676:g:VCMAAOSwydJjrss8",
                image: "volkswagen-crafter-2017-2023-compressor.png"
              }
            ],
          },
          {
            range: "1995-2005",
            basePrice: 42500,
            image: "volkswagen-crafter-1995-2005.jpg",
            ebay: "https://www.ebay.co.uk/itm/264888179723?hash=item3dac90dc0b:g:xKoAAOSwO2BeXBk~",
            options: [],
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
            ebay: "https://www.ebay.co.uk/itm/264704924741?hash=item3da1a49c45:g:AdgAAOSwmcpga4tA",
            options: [],
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
        for (let option of year.options) {
          Items.push({
            id: `${kit.make}-${model.name}-${year.range}-${year.basePrice}-${option.option}`,
            name: `${kit.make} ${model.name} Air Suspension Kit ${year.range} + ${option.option}`,
            category: "kit",
            subCategories: {
              make: kit.make,
              model: model.name,
              range: year.range,
            },
            totalPrice: year.basePrice + option.price,
            image: option.image,
            ebay: option.ebay,
          });
        }
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
    ebay: "https://www.ebay.co.uk/itm/264746301417?hash=item3da41bf7e9:g:TcwAAOSw3aFhpoxh",
  });
  Items.push({
    id: "electric-paddle-valve-switch",
    name: "Electric Paddle Valve Switch",
    category: "accessory",
    subCategories: null,
    totalPrice: 2099,
    image: "electric-switch.jpg",
    ebay: "https://www.ebay.co.uk/itm/264704867605?hash=item3da1a3bd15:g:27oAAOSwRRNhmsDW",
  });
  Items.push({
    id: "universal-air-suspension-gauge",
    name: "Single Gauge Box",
    category: "gauge",
    subCategories: null,
    totalPrice: 2500,
    image: "single-gauge.png",
    ebay: "https://www.ebay.co.uk/itm/265405278320?hash=item3dcb632870:g:6YUAAOSw4fBjcBDl",
  });
  Items.push({
    id: "manual-paddle-switch",
    name: "Manual Paddle Switch",
    category: "accessory",
    subCategories: null,
    totalPrice: 3599,
    image: "manual-paddle-switch.jpg",
    ebay: "https://www.ebay.co.uk/itm/264771104736?hash=item3da5966fe0:g:K6MAAOSwwwdirjT~",
  });
  Items.push({
    id: "single-gauge-panel",
    name: "Single Gauge Panel",
    category: "gauge",
    subCategories: null,
    totalPrice: 4800,
    image: "silver-gauge.jpg",
    ebay: "https://www.ebay.co.uk/itm/264733960167?hash=item3da35fa7e7:g:fIQAAOSwCpxizGkH",
  });
  Items.push({
    id: "black-gauge",
    name: "Single gauge Panel Rocker Switch",
    category: "gauge",
    subCategories: null,
    totalPrice: 4999,
    image: "black-gauge.png",
    ebay: "https://www.ebay.co.uk/itm/265354667796?hash=item3dc85ee714:g:hNsAAOSwLv9iyaf8",
  });
  Items.push({
    id: "air-bag",
    name: "RUBENA Air-Bag 170/2",
    category: "air bag",
    subCategories: null,
    totalPrice: 6500,
    image: "air-bag.png",
    ebay: "https://www.ebay.co.uk/itm/264704951118?hash=item3da1a5034e:g:tCgAAOSwKnNjIvCd",
  });
  Items.push({
    id: "4x-manual-padle",
    name: "4x Manual Paddle Valve Switch",
    category: "accessory",
    subCategories: null,
    totalPrice: 7200,
    image: "single-button.jpg",
    ebay: "https://www.ebay.co.uk/itm/265797994593?hash=item3de2cb8861:g:27oAAOSwRRNhmsDW",
  });
  Items.push({
    id: "double-gauge",
    name: "Twin Gauge Panel 2x",
    category: "gauge",
    subCategories: null,
    totalPrice: 9900,
    image: "double-gauge.png",
    ebay: "https://www.ebay.co.uk/itm/265055949232?hash=item3db690d1b0:g:lQQAAOSwfOxirjAa",
  });
})();

export default Items;
export { kitTypes };
export type { ShopItem, CategoryType, carMaketypes };
