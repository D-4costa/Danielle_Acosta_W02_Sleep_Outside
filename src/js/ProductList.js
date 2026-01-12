
import { renderListWithTemplate } from "./utils.js";

function productCardTemplate(product) {
  return `
  <li>
    <a href="product_pages/?product=${product.Id}">
      <h3>${product.Brand}</h3>
      <p>${product.Name}</p>
      <p>$${product.Price}</p>
    </a>
  </li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
