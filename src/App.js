import React, { useState, useEffect } from "react";
import HistoryItem from "./HistoryItem";
import { caesarCipher } from "./utils";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(1);
  const [encodedText, setEncodedText] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history"));
    if (storedHistory) setHistory(storedHistory);
  }, []);

  const handleEncode = () => {
    const result = caesarCipher(text, shift);
    setEncodedText(result);
    const newEntry = { text, shift, encodedText: result };
    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  const handleClearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  return (
    <div className="container">
      <h1 className="title">Caesar Cipher Encoder</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="กรอกข้อความ"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Shift"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          className="input"
        />
        <button onClick={handleEncode} className="button">
          เข้ารหัส
        </button>
      </div>

      {encodedText && (
        <p className="result">ผลลัพธ์การเข้ารหัส: {encodedText}</p>
      )}

      <div className="history-container">
        <h2 className="subtitle">ประวัติการเข้ารหัส</h2>
        <button onClick={handleClearHistory} className="clear-button">
          ลบประวัติ
        </button>
        {history.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
