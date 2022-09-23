const { faker } = require('@faker-js/faker');

let buyers = [];
for (let index = 0; index < 20; index++) {
  buyers.push({
    id: String(index),
    name: faker.name.fullName(),
    email: faker.internet.exampleEmail(),
  });
}

const DELAY_TIME = 500;

const readBuyers = (size) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (buyers.length === 0) reject({ code: 404, message: 'No Buyers' });
      else {
        if (size) {
          const sizedBuyers = buyers.slice(1, size);
          resolve(sizedBuyers);
        } else {
          resolve(buyers);
        }
      }
    }, DELAY_TIME);
  });
const readBuyer = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const buyer = buyers.find((item) => item.id === id);
      if (!buyer) reject({ code: 404, message: 'Buyer is not found' });
      else resolve(buyer);
    }, DELAY_TIME);
  });
const createBuyer = (buyer) =>
  new Promise((resolve) => {
    setTimeout(() => {
      buyers.push(buyer);
      resolve({ code: 201, message: 'Buyer created' });
    }, DELAY_TIME);
  });
const updateBuyer = (id, buyer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const buyerIndex = buyers.findIndex((item) => item.id === id);
      if (!buyers[buyerIndex])
        reject({ code: 404, message: 'Buyer is not found' });
      else {
        buyers[buyerIndex] = buyer;
        resolve({ code: 200, message: 'Buyer was updated successfully' });
      }
    }, DELAY_TIME);
  });
const deleteBuyer = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const buyer = buyers.find((item) => item.id === id);
      if (!buyer) reject({ code: 404, message: 'Buyer not found' });
      else {
        buyers = buyers.filter((item) => item.id !== id);
        resolve({ code: 200, message: 'Buyer was deleted successfully' });
      }
    }, DELAY_TIME);
  });

module.exports = {
  readBuyers,
  readBuyer,
  createBuyer,
  updateBuyer,
  deleteBuyer,
};
