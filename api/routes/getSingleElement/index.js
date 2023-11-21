const express = require("express");
const router = express.Router();
const data = require("../db.json");

const getSingleElement = (req, res) => {
  const { name } = req.params;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide element name properly" });
  }

  const singleElementData = data.elements.filter((obj) =>
    obj.name.toLowerCase().startsWith(name.toLowerCase())
  );

  res.status(200).send({
    success: true,
    results: singleElementData.length,
    data: [...singleElementData],
  });
};

router.get("/:name", getSingleElement);

module.exports = router;
