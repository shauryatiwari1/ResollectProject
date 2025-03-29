const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    loanNo: String,
    loanType: String,
    borrower: String,
    borrowerAddress: String,
    coBorrower: String,
    coBorrowerAddress: String,
    dpd: Number,
    sanctionAmount: String,
    region: String,
    branch: String,
    disbursedAmount: String,
    outstanding: String,
    emiAmount: String,
    emiPaid: String,
    lastPaymentDate: String,
});

module.exports = mongoose.model("Loan", loanSchema);
