const express = require('express');
const router = express.Router();
const data = require('../db.json');

const searchElement = (req, res) => {
  const { phase, name, group, symbol, block } = req.query;

  const filteredData = data.elements.filter((obj) => {
    const lowercaseSymbol = symbol ? symbol.toLowerCase() : null;
    const lowercaseBlock = block ? block.toLowerCase() : null;
    const lowercasePhase = phase ? phase.toLowerCase() : null;
    const lowercaseName = name ? name.toLowerCase() : null;

    return (
      (!symbol || obj.symbol.toLowerCase() === lowercaseSymbol) &&
      (!block || obj.block.toLowerCase() === lowercaseBlock) &&
      (!phase || obj.phase.toLowerCase().startsWith(lowercasePhase)) &&
      (!name || obj.name.toLowerCase().startsWith(lowercaseName)) &&
      (!group || obj.group === Number(group))
    );
  });

  if (filteredData.length > 0) {
    res.status(200).send({
      success: true,
      results: filteredData.length,
      data: [...filteredData],
    });
  } else {
    res.status(400).json({ success: false, msg: 'No element found' });
  }
};

router.get('/', searchElement);

module.exports = router;
