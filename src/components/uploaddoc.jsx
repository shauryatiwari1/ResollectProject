import React from "react";

export default function UploadDoc({ setIsUploadOpen }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("upload-doc-overlay")) {
      setIsUploadOpen(false);
    }
  };

  return (
    <div className="upload-doc-overlay" onClick={handleOverlayClick}>
      <div className="upload-doc-panel" onClick={(e) => e.stopPropagation()}>
        <div className="upload-doc-header">
          <h3>Upload Document</h3>
          <button className="close-btn" onClick={() => setIsUploadOpen(false)}>✖</button>
        </div>

        <div className="upload-doc-content">
          <label>Document Name</label>
          <select className="upload-input">
            <option>Select</option>
          </select>

          <label>Document Type</label>
          <select className="upload-input">
            <option>Select</option>
          </select>

          <label>Document Remarks</label>
          <input type="text" className="upload-input" placeholder="Type" />

          <label>Select File</label>
          <input type="file" className="upload-input file-input" />

          <button className="submit-btn" onClick={() => setIsUploadOpen(false)}>Submit</button>
        </div>
      </div>
    </div>
  );
}
