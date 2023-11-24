import { faker } from "@faker-js/faker";

const productModel = () => {
  return {
    _id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 20, max: 1000 }),
    category: faker.commerce.department(),
    stock: faker.number.int({ min: 10, max: 150 }),
    status: faker.datatype.boolean(),
    code: faker.commerce.isbn(10),
  };
};

const createRandomProducts = (prodQuan) => {
  const products = [];
  for (let i = 0; i < prodQuan; i++) {
    products.push(productModel());
  }
  return products;
};

console.log(createRandomProducts(100));
