const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const loanRoutes = require("./routes/loanroutes");
const Loan = require("./models/loan"); 

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// selecting wheteher to connect to main db or unit testing db
const MONGO_URI = process.env.NODE_ENV === "test" ? process.env.TEST_MONGO_URI : process.env.MONGO_URI;


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${process.env.NODE_ENV === "test" ? "Test Database" : "Main Database"}`))
    .catch(err => console.error("MongoDB Connection Error:", err));


app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/loans", loanRoutes);


app.post("/loans", async (req, res) => {
    try {
        const newLoan = new Loan(req.body);
        const savedLoan = await newLoan.save();
        res.status(201).json(savedLoan);
    } catch (error) {
        res.status(500).json({ error: "Failed to save loan data" });
    }
});


if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
