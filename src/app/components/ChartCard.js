'use client';
import React from 'react';
import { Line, Bar, Bubble } from 'react-chartjs-2';

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
        return <p className="text-center text-muted">Chart type not supported</p>;
    }
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        {/* Title + Button */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <h5 className="card-title mb-1">{title}</h5>
            <p className="text-muted small mb-0">{subtitle}</p>
          </div>
          {reportButton && (
            <button className="btn btn-sm btn-primary">
              View Report
            </button>
          )}
        </div>

        {/* Horizontal line */}
        <hr className="my-2" />

        {/* Chart */}
        <div style={{ flexGrow: 1, minHeight: '250px' }}>
          {renderChart()}
        </div>
      </div>
    </div>
  );
}
