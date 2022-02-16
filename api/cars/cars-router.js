// DO YOUR MAGIC

const express = require("express");
const router = express.Router();
const Cars = require("./cars-model");
const { checkCarId } = require("./cars-middleware");
router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", checkCarId, async (req, res, next) => {
  res.json(req.car);
});
router.post("/", async (req, res, next) => {
  res.json("posting a new car");
});
module.exports = router;
