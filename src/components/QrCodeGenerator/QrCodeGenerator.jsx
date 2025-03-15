import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QrCodeGenerator() {
  const [QRvalue, setQRValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <div id="QrCodeGenerator">
      <h2>QR Code Generator</h2>
      <div style={{ marginBottom: "50px" }}>
        <input style={{ marginRight: "10px", padding: "10px", width: "250px" }}
          type="text"
          placeholder="Enter value here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => { setQRValue(inputValue); setInputValue("") }}
          disabled={!inputValue.trim()} // Disables button if input is empty
        >
          Generate
        </button>
      </div>
      <div>
        {QRvalue && <QRCode id="QRCode" value={QRvalue} size={400} />}
      </div>
    </div>
  );
}