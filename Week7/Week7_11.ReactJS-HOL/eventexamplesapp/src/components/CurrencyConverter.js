import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [converted, setConverted] = useState('');

  const rates = {
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095,
    JPY: 1.75,
    AUD: 0.018,
  };

  const handleConvert = () => {
    const rate = rates[currency];
    if (!isNaN(amount) && amount !== '') {
      const result = (parseFloat(amount) * rate).toFixed(2);
      setConverted(`${result} ${currency}`);
    } else {
      setConverted('');
    }
  };

  return (
    <div className="card">
      <h2>INR Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter INR amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD (US Dollar)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="GBP">GBP (British Pound)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
        <option value="AUD">AUD (Australian Dollar)</option>
      </select>
      <br /><br />
      <button onClick={handleConvert}>Convert</button>
      {converted && (
        <p><strong>Converted:</strong> {converted}</p>
      )}
    </div>
  );
}

export default CurrencyConverter;
