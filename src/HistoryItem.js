import React from "react";

const HistoryItem = ({ text, shift, encodedText }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(encodedText)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div className="history-item">
      <div className="history-item-content">ข้อความต้นฉบับ: {text}</div>
      <div className="history-item-content">Shift: {shift}</div>
      <div className="history-item-content">
        ผลลัพธ์: {encodedText}
        <button onClick={handleCopy} className="copy-button">
          Copy
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;
