import React from "react";

export default function Table({ searchQuery, data }) {
    // filtering the names here in search bar
    const filteredData = data.filter((item) =>
        item.borrower.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="table-container">
            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Loan No.</th>
                            <th>Loan Type</th>
                            <th>Borrower</th>
                            <th>Borrower Address</th>
                            <th>Co-Borrower 1 Name</th>
                            <th>Co-Borrower 1 Address</th>
                            <th>Current DPD</th>
                            <th>Sanction Amount</th>
                            <th>Region</th>
                            <th>Branch</th>
                            <th>Disbursed Amount</th>
                            <th>Outstanding</th>
                            <th>EMI Amount</th>
                            <th>EMI Paid</th>
                            <th>Last Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item._id}>
                                    <td><input type="checkbox" /></td>
                                    <td className="blue-text">{item.loanNo}</td>
                                    <td>{item.loanType}</td>
                                    <td>{item.borrower}</td>
                                    <td>{item.borrowerAddress}</td>
                                    <td>{item.coBorrower}</td>
                                    <td>{item.coBorrowerAddress}</td>
                                    <td>{item.dpd}</td>
                                    <td>{item.sanctionAmount}</td>
                                    <td>{item.region}</td>
                                    <td>{item.branch}</td>
                                    <td>{item.disbursedAmount}</td>
                                    <td>{item.outstanding}</td>
                                    <td>{item.emiAmount}</td>
                                    <td>{item.emiPaid}</td>
                                    <td>{item.lastPaymentDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="16" style={{ textAlign: "center", color: "gray" }}>
                                    No matching records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
