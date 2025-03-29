import React, { useState } from "react";
import "./adddataform.css"; 

export default function AddDataForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    loanNo: "",
    loanType: "",
    borrower: "",
    borrowerAddress: "",
    coBorrower: "",
    coBorrowerAddress: "",
    dpd: "",
    sanctionAmount: "",
    region: "",
    branch: "",
    disbursedAmount: "",
    outstanding: "",
    emiAmount: "",
    emiPaid: "",
    lastPaymentDate: "",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.loanNo || !formData.borrower || !formData.loanType) {
      alert("Loan No, Borrower, and Loan Type are required.");
      return;
    }
    onSubmit(formData); 
    onClose(); 
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Add New Loan</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="loanNo" placeholder="Loan No." value={formData.loanNo} onChange={handleChange} required />
          <input type="text" name="loanType" placeholder="Loan Type" value={formData.loanType} onChange={handleChange} required />
          <input type="text" name="borrower" placeholder="Borrower Name" value={formData.borrower} onChange={handleChange} required />
          <input type="text" name="borrowerAddress" placeholder="Borrower Address" value={formData.borrowerAddress} onChange={handleChange} required />
          <input type="text" name="coBorrower" placeholder="Co-Borrower" value={formData.coBorrower} onChange={handleChange} />
          <input type="text" name="coBorrowerAddress" placeholder="Co-Borrower Address" value={formData.coBorrowerAddress} onChange={handleChange} />
          <input type="number" name="dpd" placeholder="Current DPD" value={formData.dpd} onChange={handleChange} required />
          <input type="text" name="sanctionAmount" placeholder="Sanction Amount" value={formData.sanctionAmount} onChange={handleChange} required />
          <input type="text" name="region" placeholder="Region" value={formData.region} onChange={handleChange} required />
          <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required />
          <input type="text" name="disbursedAmount" placeholder="Disbursed Amount" value={formData.disbursedAmount} onChange={handleChange} required />
          <input type="text" name="outstanding" placeholder="Outstanding Amount" value={formData.outstanding} onChange={handleChange} required />
          <input type="text" name="emiAmount" placeholder="EMI Amount" value={formData.emiAmount} onChange={handleChange} required />
          <input type="text" name="emiPaid" placeholder="EMI Paid" value={formData.emiPaid} onChange={handleChange} required />
          <input type="date" name="lastPaymentDate" value={formData.lastPaymentDate} onChange={handleChange} required />

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
