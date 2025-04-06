import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleGenerate = () => {
    setQrValue(input);
  };

  return (
    <div className="submit-page">
      <h1>QR Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a valid link (URL)"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleGenerate}>Generate QR</button>
      </div>
      <div id="qrcode">{qrValue && <QRCodeSVG value={qrValue} />}</div>
    </div>
  );
}

export default App;
