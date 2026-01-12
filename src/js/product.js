
import { getParam } from "./utils.js";
import ProductData from "./ProductData.js";
import ProductDetails from "./ProductDetails.js";

const productId = getParam("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();
