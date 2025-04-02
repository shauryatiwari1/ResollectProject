const mongoose = require("mongoose");
require("dotenv").config();
const Loan = require("./models/loan");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected for Seeding"))
    .catch(err => console.error("MongoDB Connection Error:", err));

const sampleLoans = [
    
        {
            loanNo: "L28U321",
            loanType: "Home Loan",
            borrower: "Louis",
            borrowerAddress: "123 Street, City",
            coBorrower: "Tanner",
            coBorrowerAddress: "456 Avenue, Town",
            dpd: 45,
            sanctionAmount: "Rs 500000",
            region: "West",
            branch: "Branch A",
            disbursedAmount: "Rs 250000",
            outstanding: "Rs 300000",
            emiAmount: "Rs 15000",
            emiPaid: "Rs 10000",
            lastPaymentDate: "2024-03-15"
        },
        {
            loanNo: "L28U322",
            loanType: "Car Loan",
            borrower: "Alex",
            borrowerAddress: "456 Road, City",
            coBorrower: "John",
            coBorrowerAddress: "789 Street, Town",
            dpd: 30,
            sanctionAmount: "Rs 700000",
            region: "East",
            branch: "Branch B",
            disbursedAmount: "Rs 400000",
            outstanding: "Rs 350000",
            emiAmount: "Rs 20000",
            emiPaid: "Rs 18000",
            lastPaymentDate: "2024-03-10"
        },
        {
            loanNo: "L28U323",
            loanType: "Personal Loan",
            borrower: "Emma",
            borrowerAddress: "789 Boulevard, City",
            coBorrower: "Sophia",
            coBorrowerAddress: "321 Lane, Town",
            dpd: 60,
            sanctionAmount: "Rs 900000",
            region: "North",
            branch: "Branch C",
            disbursedAmount: "Rs 500000",
            outstanding: "Rs 400000",
            emiAmount: "Rs 25000",
            emiPaid: "Rs 20000",
            lastPaymentDate: "2024-02-20"
        },
        {
            loanNo: "L28U324",
            loanType: "Education Loan",
            borrower: "David",
            borrowerAddress: "567 Road, City",
            coBorrower: "Sarah",
            coBorrowerAddress: "123 Avenue, Town",
            dpd: 15,
            sanctionAmount: "Rs 300000",
            region: "South",
            branch: "Branch D",
            disbursedAmount: "Rs 200000",
            outstanding: "Rs 100000",
            emiAmount: "Rs 10000",
            emiPaid: "Rs 5000",
            lastPaymentDate: "2024-03-05"
        },
        {
            loanNo: "L28U325",
            loanType: "Gold Loan",
            borrower: "Michael",
            borrowerAddress: "231 Street, City",
            coBorrower: "Olivia",
            coBorrowerAddress: "654 Road, Town",
            dpd: 90,
            sanctionAmount: "Rs 1200000",
            region: "West",
            branch: "Branch A",
            disbursedAmount: "Rs 800000",
            outstanding: "Rs 400000",
            emiAmount: "Rs 35000",
            emiPaid: "Rs 30000",
            lastPaymentDate: "2024-01-25"
        },
        {
            loanNo: "L28U326",
            loanType: "Home Loan",
            borrower: "Sophia",
            borrowerAddress: "456 Lane, City",
            coBorrower: "Daniel",
            coBorrowerAddress: "789 Avenue, Town",
            dpd: 50,
            sanctionAmount: "Rs 600000",
            region: "East",
            branch: "Branch B",
            disbursedAmount: "Rs 300000",
            outstanding: "Rs 300000",
            emiAmount: "Rs 18000",
            emiPaid: "Rs 12000",
            lastPaymentDate: "2024-03-12"
        },
        {
            loanNo: "L28U327",
            loanType: "Car Loan",
            borrower: "William",
            borrowerAddress: "321 Road, City",
            coBorrower: "Liam",
            coBorrowerAddress: "456 Street, Town",
            dpd: 25,
            sanctionAmount: "Rs 450000",
            region: "North",
            branch: "Branch C",
            disbursedAmount: "Rs 250000",
            outstanding: "Rs 200000",
            emiAmount: "Rs 15000",
            emiPaid: "Rs 12000",
            lastPaymentDate: "2024-03-08"
        },
        {
            loanNo: "L28U328",
            loanType: "Personal Loan",
            borrower: "Olivia",
            borrowerAddress: "654 Avenue, City",
            coBorrower: "Isabella",
            coBorrowerAddress: "789 Lane, Town",
            dpd: 70,
            sanctionAmount: "Rs 850000",
            region: "South",
            branch: "Branch D",
            disbursedAmount: "Rs 500000",
            outstanding: "Rs 350000",
            emiAmount: "Rs 28000",
            emiPaid: "Rs 25000",
            lastPaymentDate: "2024-02-15"
        },
        {
            loanNo: "L28U329",
            loanType: "Education Loan",
            borrower: "James",
            borrowerAddress: "876 Street, City",
            coBorrower: "Charlotte",
            coBorrowerAddress: "321 Road, Town",
            dpd: 10,
            sanctionAmount: "Rs 400000",
            region: "West",
            branch: "Branch A",
            disbursedAmount: "Rs 200000",
            outstanding: "Rs 200000",
            emiAmount: "Rs 12000",
            emiPaid: "Rs 10000",
            lastPaymentDate: "2024-03-02"
        },
        {
            loanNo: "L28U330",
            loanType: "Gold Loan",
            borrower: "Benjamin",
            borrowerAddress: "567 Boulevard, City",
            coBorrower: "Amelia",
            coBorrowerAddress: "654 Avenue, Town",
            dpd: 55,
            sanctionAmount: "Rs 1100000",
            region: "East",
            branch: "Branch B",
            disbursedAmount: "Rs 700000",
            outstanding: "Rs 400000",
            emiAmount: "Rs 32000",
            emiPaid: "Rs 27000",
            lastPaymentDate: "2024-01-30"
        }

    
];

// inserting new data manually here using this function for checking how ui responds initially
const seedDB = async () => {
    await Loan.deleteMany({}); 
    await Loan.insertMany(sampleLoans);
    console.log("Sample Data Inserted!");
    mongoose.connection.close();
};

// seeding function will run when this file is run
seedDB();
