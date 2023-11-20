const express = require('express');
const router = express.Router();
const data = require('./index.json');

const getAllElements = (req, res) => {
  if (data.elements.length > 0) {
    res.status(200).send({
      success: true,
      totalResults: data.elements.length,
      data: data.elements,
    });
  } else {
    res.status(200).send({ status: true, results: 0, data: [] });
  }
};

router.get('/', getAllElements);

module.exports = router;
