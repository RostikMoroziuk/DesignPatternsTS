export interface ProductI {
  price?: number;
  getPrice(): number;
}

export class Box implements ProductI {
  private products: ProductI[];

  constructor(products: ProductI[]) {
    this.products = products;
  }

  public getPrice(): number {
    let price = 0;
    for (let i = 0; i < this.products.length; i += 1) {
      price += this.products[i].getPrice();
    }

    return price;
  }
}

export class Product implements ProductI {
  price: number;
  constructor(price: number) {
    this.price = price;
  }
  public getPrice(): number {
    return this.price;
  }
}

const product1 = new Product(1);
const product2 = new Product(2);
const product3 = new Product(3);

const box = new Box([product1, product2, product3]);
box.getPrice();
