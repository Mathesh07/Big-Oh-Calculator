import React, { useState } from 'react';

const CalculateButton = ({ code }) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://your-backend.onrender.com/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="output-container">
      <h1>Big Oh Calculator</h1>
      <button onClick={handleCalculate} className="calculate-button">
        {loading ? 'Calculating...' : 'Calculate'}
      </button>

      <div>
        <p>Time complexity:</p>
        <div className="box">
          {loading ? <div className="box-spinner" /> : response.timeComplexity || ' - '}
        </div>
      </div>

      <div>
        <p>Space complexity:</p>
        <div className="box">
          {loading ? <div className="box-spinner" /> : response.spaceComplexity || ' - '}
        </div>
      </div>

      <div>
        <p>Explanation:</p>
        <div className="explanation">
          {loading ? <div className="box-spinner" /> : response.explanation || ' - '}
        </div>
      </div>
    </div>
  );
};

export default CalculateButton;
