const buyerServices = require('../services/buyers.service');
const getBuyers = (size) =>
  new Promise((resolve, reject) => {
    try {
      resolve(buyerServices.readBuyers(size));
    } catch (error) {
      reject(error);
    }
  });

const getBuyer = (id) =>
  new Promise((resolve, reject) => {
    try {
      resolve(buyerServices.readBuyer(id));
    } catch (error) {
      reject(error);
    }
  });
const postBuyer = (body) =>
  new Promise((resolve, reject) => {
    try {
      const { id, name, email } = body;
      if (!(id && name && email)) {
        reject({ code: 400, message: 'Bad request, check for user fields' });
      } else {
        const buyer = {
          id,
          name,
          email,
        };
        resolve(buyerServices.createBuyer(buyer));
      }
    } catch (error) {
      reject(error);
    }
  });
const putBuyer = (buyerID, body) =>
  new Promise((resolve, reject) => {
    try {
      const { id, name, email } = body;
      if (!(id && name && email)) {
        reject({ code: 400, message: 'Bad request, check for user fields' });
      } else {
        const buyer = {
          id,
          name,
          email,
        };
        resolve(buyerServices.updateBuyer(buyerID, buyer));
      }
    } catch (error) {
      reject(error);
    }
  });
  const deleteBuyer = (id) => new Promise((resolve, reject) => {
    try {
      resolve( buyerServices.deleteBuyer(id) );
    } catch (error) {
      reject(error);
    }
  });
module.exports = {
  getBuyers,
  getBuyer,
  postBuyer,
  putBuyer,
  deleteBuyer
};
