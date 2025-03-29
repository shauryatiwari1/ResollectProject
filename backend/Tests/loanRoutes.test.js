const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server"); 

const sampleLoan = {
    loanNo: "LN12345",
    loanType: "Home Loan",
    borrower: "John Doe",
    borrowerAddress: "123 Street, City",
    coBorrower: "Jane Doe",
    coBorrowerAddress: "456 Street, City",
    dpd: 10,
    sanctionAmount: "50000",
    region: "North",
    branch: "Main",
    disbursedAmount: "45000",
    outstanding: "5000",
    emiAmount: "2000",
    emiPaid: "5",
    lastPaymentDate: "2024-03-25"
};

beforeAll(async () => {
    await mongoose.connect(process.env.TEST_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

// Test for Api Routing here(1 test)
test("GET / should return API is running...", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("API is running...");
});

// Testing adding a new loan or data (2 test)
test("POST /loans should create a new loan", async () => {
    const response = await request(app).post("/loans").send(sampleLoan);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id"); 
    expect(response.body.loanNo).toBe(sampleLoan.loanNo);
});

