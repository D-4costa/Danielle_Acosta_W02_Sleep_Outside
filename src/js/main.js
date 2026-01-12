
import ProductData from "./ProductData.js";
import ProductList from "./ProductList.js";

const dataSource = new ProductData("tents");
const listElement = document.getElementById("product-list");

const productList = new ProductList("tents", dataSource, listElement);
productList.init();
