
export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    document.getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  addProductToCart() {
    alert(`${this.product.Name} added to cart`);
  }

  renderProductDetails() {
    const el = document.getElementById("product-detail");
    el.innerHTML = `
      <h2>${this.product.Brand}</h2>
      <h3>${this.product.Name}</h3>
      <p>$${this.product.Price}</p>
      <p>${this.product.Description}</p>
    `;
  }
}
