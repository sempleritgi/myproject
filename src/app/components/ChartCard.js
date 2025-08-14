'use client';
import React from 'react';
import {
  Line,
  Bar,
  Bubble
} from 'react-chartjs-2';

export default function ChartCard({
  type,
  data,
  options,
  title,
  subtitle,
  reportButton
}) {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={options} />;
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'bubble':
        return <Bubble data={data} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title mb-1">{title}</h5>
        <p className="text-muted small">{subtitle}</p>
        <div style={{ height: '250px' }}>
          {renderChart()}
        </div>
        {reportButton && (
          <button className="btn btn-sm btn-primary mt-3">
            View Report
          </button>
        )}
      </div>
    </div>
  );
}
