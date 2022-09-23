const express = require('express');
const response = require('../lib/response-message');
const log = require ('../lib/log-message');

const pointsofsaleController = require('../controllers/pointsofsale.controller');

const router = express.Router();

router.get('', (req, res) => {
  const { size } = req.query;
  pointsofsaleController
    .getPointofsale(size)
    .then((pointofsale) => {
      response(res, { code: 200, key: 'pointofsale', payload: pointofsale });
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
  pointsofsaleController
    .getPointofsale(id)
    .then((pointofsale) => {
      response(res, { code: 200, key: 'pointofsale', payload: pointofsale });
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
    pointsofsaleController.postPointofsale(body)
      .then( result => {
        response(res, { code: result.code, key: "message", payload: result.message});
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });
  router.put('/:pointofsaleID', (req, res) => {
    const { pointofsaleID } = req.params;
    const { body } = req;
    pointsofsaleController.putPointofsale(pointofsaleID, body)
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
    pointsofsaleController.deletePointofsale(id)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      })
  });

module.exports = router;
