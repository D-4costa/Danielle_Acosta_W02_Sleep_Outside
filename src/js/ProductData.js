
function convertToJson(res) {
  if (res.ok) return res.json();
  throw new Error("Bad response");
}

export default class ProductData {
  constructor(category) {
    this.path = `../json/${category}.json`;
  }
  getData() {
    return fetch(this.path).then(convertToJson);
  }
  async findProductById(id) {
    const data = await this.getData();
    return data.find(item => item.Id === id);
  }
}
