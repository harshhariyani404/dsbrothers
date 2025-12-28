import express from "express";
import Diamond from "../models/Diamond.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const filter = {};

  if (req.query.shape) filter.shape = req.query.shape;

  const diamonds = await Diamond.find(filter);
  res.json(diamonds);
});

export default router;
