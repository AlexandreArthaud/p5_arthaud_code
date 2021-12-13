class Product {
  constructor(data) {
    this._id = data._id;
    this._imageUrl = data.imageUrl;
    this._altText = data.altText;
    this._description = data.description;
    this._name = data.name; 
    this._price = data.price;
    this._colors = data.colors;
  }

  getHTML() {
    let html = `
      <a href="./product.html?id=${this._id}">
      <article>
        <img src="${this._imageUrl}" alt="${this._altText}" />
        <h3 class="productName">${this._name}</h3>
        <p class="productDescription>${this._description}</p>
      </article>
      </a>
    `
    return html;
  }

  getDescription() {
    return this._description;
  }

  getName() {
    return this._name;
  }

  getPrice() {
    return this._price;
  }

  getImgHTML() {
    return `<img src="${this._imageUrl}" alt="${this._altText}" />`
  }

  getColorOptionsHTML() {
    let output = '';
    for (let color of this._colors) {
      output += `
        <option value=${color}>${color}</option> 
      `
    }
    return output;
  }
}