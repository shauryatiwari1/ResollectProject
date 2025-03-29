const express = require("express");
const Loan = require("../models/loan"); 

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const loans = await Loan.find();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const newLoan = new Loan(req.body);
        const savedLoan = await newLoan.save();
        res.status(201).json(savedLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
