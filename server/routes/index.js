const express = require("express");

let router = express.Router();

router.use(express.json());

router.use("/business", require("./api/business"));
router.use("/delivery", require("./api/careforce"));
router.use("/inventory", require("./api/inventory"));
router.use("/payment", require("./api/checkout"));

module.exports = router;
