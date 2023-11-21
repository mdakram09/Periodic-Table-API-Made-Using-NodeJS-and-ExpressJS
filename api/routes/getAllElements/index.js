const express = require('express');
const router = express.Router();
const data = require('../db.json');

const getAllElements = (req, res) => {
  if (data.elements.length > 0) {
    res.status(200).send({
      success: true,
      totalResults: data.elements.length,
      data: data.elements,
    });
  } else {
    res
      .status(400)
      .send({ status: false, results: 0, msg: 'some error occured', data: [] });
  }
};

router.get('/', getAllElements);

module.exports = router;
