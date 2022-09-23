const express = require('express');
const response = require('../lib/response-message');
const log = require ('../lib/log-message');

const buyersController = require('../controllers/buyers.controller');

const router = express.Router();

router.get('', (req, res) => {
  const { size } = req.query;
  buyersController
    .getBuyers(size)
    .then((buyers) => {
      response(res, { code: 200, key: 'buyers', payload: buyers });
    })
    .catch((error) => {
      log.logError(error);
      response(res, {
        code: error.code,
        key: 'message',
        payload: error.message,
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  buyersController
    .getBuyer(id)
    .then((buyer) => {
      response(res, { code: 200, key: 'buyer', payload: buyer });
    })
    .catch((error) => {
      log.logError(error);
      response(res, {
        code: error.code,
        key: 'message',
        payload: error.message,
      });
    });
});
router.post('', (req, res) => {
    const { body } = req;
    buyersController.postBuyer(body)
      .then( result => {
        response(res, { code: result.code, key: "message", payload: result.message});
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });
  router.put('/:buyerID', (req, res) => {
    const { buyerID } = req.params;
    const { body } = req;
    buyersController.putBuyer(buyerID, body)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    buyersController.deleteBuyer(id)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      })
  });

module.exports = router;
