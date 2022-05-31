const chil1 = require("../images/children/chil_1.jpg");
const chilhover1 = require("../images/children/chilhover_1.jpg");

const chil2 = require("../images/children/chil_2.jpg");
const chilhover2 = require("../images/children/chilhover_2.jpg");

const chil3 = require("../images/children/chil_3.jpg");

const chil4 = require("../images/children/chil_4.jpg");
const chilhover4 = require("../images/children/chilhover_4.jpg");

const products = [
  {
    title: "Boys",
    img1: chil1,
    img2: chilhover1,
    link: "DISCOVER MORE",
  },
  {
    title: "Girls",
    img1: chil2,
    img2: chilhover2,
    link: "DISCOVER MORE",
  },
  {
    title: "Baby",
    img1: chil3,
    img2: chilhover2,
    link: "DISCOVER MORE",
  },
  {
    title: "Girls",
    img1: chil4,
    img2: chilhover4,
    link: "DISCOVER MORE",
  },
];

const getAllProducts = () => products;

const productData = {
    getAllProducts,
   
  };
  
  export default productData;
  