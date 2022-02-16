// DO YOUR MAGIC

const express = require("express");
const router = express.Router();
const Cars = require("./cars-model");
const {
  checkCarId,
  checkVinNumberValid,
  checkCarPayload,
  checkVinNumberUnique,
} = require("./cars-middleware");
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
router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
    res.json("posting a car");
  }
);
module.exports = router;
