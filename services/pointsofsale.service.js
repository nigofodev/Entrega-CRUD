const { faker } = require('@faker-js/faker');

let pointsofsale = [];
for (let index = 0; index < 20; index++) {
  pointsofsale.push({
    id: String(index),
    name:faker.name.firstName(),
    manager: faker.name.fullName(),
    address: faker.address.streetAddress()
  });
}

const DELAY_TIME = 500;

const readPointsofsale = (size) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pointsofsale.length === 0) reject({ code: 404, message: 'No Points of sale' });
      else {
        if (size) {
          const sizedPointsofsale = pointsofsale.slice(1, size);
          resolve(sizedPointsofsale);
        } else {
          resolve(pointsofsale);
        }
      }
    }, DELAY_TIME);
  });
const readPointofsale = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const pointofsale = pointsofsale.find((item) => item.id === id);
      if (!pointofsale) reject({ code: 404, message: 'Point of sale is not found' });
      else resolve(pointofsale);
    }, DELAY_TIME);
  });
const createPointofsale = (pointofsale) =>
  new Promise((resolve) => {
    setTimeout(() => {
      pointsofsale.push(pointofsale);
      resolve({ code: 201, message: 'Point of sale has been created' });
    }, DELAY_TIME);
  });
const updatePointofsale = (id, pointofsale) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const pointofsaleIndex = pointsofsale.findIndex((item) => item.id === id);
      if (!pointsofsale[pointofsaleIndex])
        reject({ code: 404, message: 'Point of sale is not found' });
      else {
        pointsofsale[pointofsaleIndex] = pointofsale;
        resolve({ code: 200, message: 'Point of sale was updated successfully' });
      }
    }, DELAY_TIME);
  });
const deletePointofsale = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const pointofsale = pointsofsale.find((item) => item.id === id);
      if (!pointofsale) reject({ code: 404, message: 'Point of sale not found' });
      else {
        pointsofsale = pointsofsale.filter((item) => item.id !== id);
        resolve({ code: 200, message: 'Point of sale was deleted successfully' });
      }
    }, DELAY_TIME);
  });

module.exports = {
  readPointsofsale,
  readPointofsale,
  createPointofsale,
  updatePointofsale,
  deletePointofsale,
};
