const tai1 = require("../images/tailoring/tai_1.png");
const taihover1 = require("../images/tailoring/taihover_1.png");
const taihover2_1 = require("../images/tailoring/taihover2_1.png");

const tai2 = require("../images/tailoring/tai_2.png");
const taihover2 = require("../images/tailoring/taihover_2.png");

const tai3 = require("../images/tailoring/tai_3.png");
const taihover3 = require("../images/tailoring/taihover_3.png");

const tai4 = require("../images/tailoring/tai_4.png");
const taihover4 = require("../images/tailoring/taihover_4.png");

const tai5 = require("../images/tailoring/tai_5.png");
const taihover5 = require("../images/tailoring/taihover_5.png");

const tai6 = require("../images/tailoring/tai_6.png");
const taihover6 = require("../images/tailoring/taihover_6.png");

const tai7 = require("../images/tailoring/tai_7.png");
const taihover7 = require("../images/tailoring/taihover_7.png");

const tai8 = require("../images/tailoring/tai_8.png");
const taihover8 = require("../images/tailoring/taihover_8.png");

const tai9 = require("../images/tailoring/tai_9.png");
const taihover9 = require("../images/tailoring/taihover_9.png");

const tai10 = require("../images/tailoring/tai_10.png");
const taihover10 = require("../images/tailoring/taihover_10.png");

const tai11 = require("../images/tailoring/tai_11.png");
const taihover11 = require("../images/tailoring/taihover_11.png");

const tai12 = require("../images/tailoring/tai_12.png");
const taihover12 = require("../images/tailoring/taihover_12.png");

const products = [
  {
    title: "Cotton poplin shirt",
    price: "AU$ 920",
    img1: tai1,
    img2: taihover1,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug: "cotton-poplin",
    colors: ["white", "red", "orange"],
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Horsebit striped wool bow tie",
    price: "",
    img1: tai2,
    img2: taihover2,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"bow-tie",
    colors: ["white", "red", "blue"],
    size: ["s", "m"],

  },
  {
    title: "Men's loafer with interlocking G",
    price: "AU$ 1,295",
    img1: tai3,
    img2: taihover3,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"shoe-man",
    colors: ["white", "red", "orange", "yellow"],
    size: ["m"],

  },
  {
    title: "Men's loafer with Horsebit",
    price: "AU$ 1,330",
    img1: tai4,
    img2: taihover4,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"shoe-man",
    colors: ["white", "orange", "blue"],
    size: ["xl"],
  },
  {
    title: "Oxford cotton  shirt",
    price: "AU$ 865",
    img1: tai1,
    img2: taihover2_1,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"cotton-poplin",
    colors: ["white", "pink"],
    size: ["xxl"],

  },
  {
    title: "Bee embroidered silk tie",
    price: "AU$ 405",
    img1: tai5,
    img2: taihover5,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"bow-tie",
    colors: ["black"],
    size: ["s", "m", "xl"],

  },
  {
    title: "silk tie with bee web",
    price: "AU$ 405",
    img1: tai6,
    img2: taihover6,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"bow-tie",
    colors: ["white", "red", "orange", "blue"],
    size: ["l", "xl"],

  },
  {
    title: "Duffle bag with interlocking G",
    price: "AU$ 920",
    img1: tai7,
    img2: taihover7,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"handbag",
    colors: ["white", "red", "black"],
    size: ["s", "m", "xl"],

  },
  {
    title: "Large duffle bag with interlocking G",
    price: "AU$ 3,985",
    img1: tai8,
    img2: taihover8,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"handbag",
    colors: ["white", "blue"],
    size: ["m"],
  },
  {
    title: "Straiht fit G dot wool suit",
    price: "AU$ 3,925",
    img1: tai9,
    img2: taihover9,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"sui",
    colors: ["blue", "black"],
    size: ["l"],

    
  },
  {
    title: "Bee embroidered silk tie",
    price: "AU$ 405",
    img1: tai10,
    img2: taihover10,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"bow-tie",
    colors: ["blue", "black"],
    size: ["s", "m", "xl"],

  },
  {
    title: "Large duffle bag with interlocking G",
    price: "AU$ 3,985",
    img1: tai11,
    img2: taihover11,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"handbag",
    colors: ["blue", "black"],
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Straight fit G dot wool suit",
    price: "AU$ 3,925",
    img1: tai12,
    img2: taihover12,
    link: "VIEW PRODUCT",
    icon: "bx bx-heart",
    slug:"sui",
    colors: ["blue", "black"],
    size: ["s", "m", "l", "xl"],
  },
  

];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};
const productData = {
  getAllProducts,
  getProducts,
};

export default productData;
