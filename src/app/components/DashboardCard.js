'use client';
import React from 'react';
import { FaCartShopping, FaArrowsRotate } from 'react-icons/fa6';
import { FaWallet, FaHandPaper, FaChartLine } from 'react-icons/fa';

export default function DashboardCard() {
  const metrics = [
    { title: 'Purchases', icon: <FaCartShopping />, value: '0.00 INR', color: '#4cafef' },
    { title: 'Redemptions', icon: <FaWallet />, value: '0.00 INR', color: '#ff9800' },
    { title: 'Reg. Transactions', icon: <FaArrowsRotate />, value: '0.00 INR', color: '#9c27b0' },
    { title: 'SIP Rejections', icon: <FaHandPaper />, value: '0.00 INR', color: '#f44336' },
    { title: 'New SIP', icon: <FaChartLine />, value: '0.00 INR', color: '#4caf50' },
  ];

  const handleViewClick = (title) => {
    alert(`Opening details for: ${title}`);
  };

  return (
    <div className="mt-3 dashboard-container">
      {/* Filter Buttons */}
      <div className="mb-4 d-flex gap-2 flex-wrap">
        {['3 Days', '7 Days', '10 Days', '30 Days'].map((label, i) => (
          <button
            key={i}
            className="btn-filter"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="dashboard-grid">
        {metrics.map((m, i) => (
          <div key={i} className="metric-card">
            <div className="metric-content">
              <div
                className="icon-wrap"
                style={{
                  backgroundColor: `${m.color}20`,
                  color: m.color,
                }}
              >
                {m.icon}
              </div>
              <div>
                <div className="metric-title">{m.title}</div>
                <div className="metric-value">{m.value}</div>
              </div>
            </div>
            <button
              className="btn-view"
              onClick={() => handleViewClick(m.title)}
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .dashboard-container {
          font-family: 'Inter', sans-serif;
        }
        .btn-filter {
          background: white;
          border: 1px solid #ddd;
          color: #333;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .btn-filter:hover {
          background: #007bff;
          color: white;
          border-color: #007bff;
          box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
        }
        .dashboard-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .metric-card {
          flex: 1 1 calc(20% - 1rem);
          min-width: 200px;
          background: white;
          border-radius: 15px;
          padding: 16px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .metric-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        .metric-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }
        .metric-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #333;
        }
        .metric-value {
          font-size: 0.85rem;
          color: #666;
        }
        .btn-view {
          align-self: flex-end;
          margin-top: 10px;
          padding: 4px 12px;
          font-size: 0.8rem;
          border-radius: 50px;
          border: 1px solid #ccc;
          background: white;
          transition: all 0.2s ease;
        }
        .btn-view:hover {
          background: #007bff;
          color: white;
          border-color: #007bff;
          box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
