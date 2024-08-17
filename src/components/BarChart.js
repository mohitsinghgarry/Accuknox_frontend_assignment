import React from 'react';
import '../css/barchart.scss'
const BarChart = ({ data, total }) => {
  const calculateWidth = (value) => {
    return (value / total) * 100;
  };

  return (
    <div className='barchart' style={{ border:'2px solid red', display: 'flex', height: '30px', borderRadius: '5px', overflow: 'hidden' }}>
      <div
        style={{
          backgroundColor: 'yellow',
          width: `${calculateWidth(data.Critical)}%`,
          display: data.Critical ? 'block' : 'none'
        }}
        title={`Critical: ${data.Critical}`}
      />
      <div
        style={{
          backgroundColor: 'red',
          width: `${calculateWidth(data.High)}%`,
          display: data.High ? 'block' : 'none'
        }}
        title={`High: ${data.High}`}
      />
      <div
        style={{
          backgroundColor: 'purple',
          width: `${calculateWidth(data.Medium)}%`,
          display: data.Medium ? 'block' : 'none'
        }}
        title={`Medium: ${data.Medium}`}
      />
      <div
        style={{
          backgroundColor: 'orange',
          width: `${calculateWidth(data.Low)}%`,
          display: data.Low ? 'block' : 'none'
        }}
        title={`Low: ${data.Low}`}
      />
    </div>
  );
};

export default BarChart;
