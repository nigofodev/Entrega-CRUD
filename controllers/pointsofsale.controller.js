const pointofsaleServices = require('../services/pointsofsale.service');
const getPointsofsale = (size) =>
  new Promise((resolve, reject) => {
    try {
      resolve(pointofsaleServices.readPointofsale(size));
    } catch (error) {
      reject(error);
    }
  });

const getPointofsale = (id) =>
  new Promise((resolve, reject) => {
    try {
      resolve(pointofsaleServices.readPointofsale(id));
    } catch (error) {
      reject(error);
    }
  });
const postPointofsale = (body) =>
  new Promise((resolve, reject) => {
    try {
      const { id, name, manager, address } = body;
      if (!(id && name && manager && address)) {
        reject({ code: 400, message: 'Bad request, check for user fields' });
      } else {
        const pointofsale = {
          id,
          name,
          manager,
          address
        };
        resolve(pointofsaleServices.createPointofsale(pointofsale));
      }
    } catch (error) {
      reject(error);
    }
  });
const putPointofsale = (pointofsaleID, body) =>
  new Promise((resolve, reject) => {
    try {
      const { id, name, manager, address } = body;
      if (!(id && name && manager && address)){
        reject({ code: 400, message: 'Bad request, check for user fields' });
      } else {
        const pointofsale = {
          id,
          name,
          manager,
          address
        };
        resolve(pointofsaleServices.updatePointofsale(pointofsaleID, pointofsale));
      }
    } catch (error) {
      reject(error);
    }
  });
  const deletePointofsale = (id) => new Promise((resolve, reject) => {
    try {
      resolve( pointofsaleServices.deletePointofsale(id) );
    } catch (error) {
      reject(error);
    }
  });
module.exports = {
  getPointsofsale,
  getPointofsale,
  postPointofsale,
  putPointofsale,
  deletePointofsale
};
