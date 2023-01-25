const router = require("express").Router();
require("dotenv").config();
const mongoose = require("mongoose");
const Data = require("../models/DisasterData");
const ReportData = require("../models/ReportData");

// Add disaster data
router.post("/add-disaster-data", async (req, res) => {
  const newData = new Data({
    detail: req.body.detail,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  try {
    const saveData = await newData.save();
    res.status(200).json({ success: true, saveData });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
});

// get all disaster data
router.get("/all-disaster-data", async (req, res) => {
  try {
    const allData = await Data.find();
    return res.json(allData);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add report data
router.post("/add-report-data", async (req, res) => {
  const newReportData = new ReportData({
    detail: req.body.detail,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  try {
    const saveReportData = await newReportData.save();
    res.status(200).json({ success: true, saveReportData });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
});

// get all report data
router.get("/all-report-data", async (req, res) => {
  try {
    const allReportData = await ReportData.find();
    return res.json(allReportData);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;