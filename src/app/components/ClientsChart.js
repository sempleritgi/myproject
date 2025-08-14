'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BubbleController
} from 'chart.js';
import ChartCard from './ChartCard';

// Chart.js components register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BubbleController
);

export default function ClientsChart() {
  // Bubble chart data (Clients)
  const bubbleData = {
    datasets: [
      {
        label: 'Clients',
        data: [
          { x: 1, y: 1, r: 15, label: 'Online', value: 60 },
          { x: 2, y: 2, r: 25, label: 'Active', value: 541 },
          { x: 3, y: 3, r: 35, label: 'Inactive', value: 3824 },
          { x: 4, y: 4, r: 10, label: 'New', value: 2 },
        ],
        backgroundColor: [
          '#4caf50',
          '#2196f3',
          '#f44336',
          '#ff9800',
        ],
      },
    ],
  };

  const bubbleOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw.label}: ${ctx.raw.value}`,
        },
      },
    },
    scales: {
      x: { display: false, min: 0, max: 5 },
      y: { display: false, min: 0, max: 5 },
    },
  };

  // SIP Business Chart (Mixed bar + line)
  const sipData = {
    labels: ['Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'line',
        label: 'SIP Trend',
        data: [1.8, 0, 1.2, 1.3],
        borderColor: '#f44336',
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        yAxisID: 'y1',
      },
      {
        type: 'bar',
        label: 'SIP Amount',
        data: [105, 100, 110, 115],
        backgroundColor: '#2196f3',
        yAxisID: 'y',
      },
    ],
  };

  const sipOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
    },
    scales: {
      y: {
        position: 'left',
        title: { display: true, text: 'Amount (in Lakhs)' },
      },
      y1: {
        position: 'right',
        grid: { drawOnChartArea: false },
        title: { display: true, text: 'Growth (%)' },
      },
    },
  };

  // Monthly MIS (Multi-line area)
  const misData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [0.2, 0.3, 0.25, 0.5, 0.45, 0.3],
        fill: true,
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderColor: '#4caf50',
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [0.3, 0.25, 0.35, 0.4, 0.5, 0.35],
        fill: true,
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        borderColor: '#f44336',
        tension: 0.4,
      },
    ],
  };

  const misOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
    },
    scales: {
      y: { title: { display: true, text: 'Amount (Cr)' } },
    },
  };

  return (
    <div className="row g-4 mt-4">
      {/* Left: Bubble Chart */}
      <div className="col-lg-4 col-md-6">
        <ChartCard
          type="bubble"
          data={bubbleData}
          options={bubbleOptions}
          title="Clients"
          subtitle="Online, New, Active, Inactive"
          reportButton
        />
      </div>

      {/* Middle: SIP Business Chart */}
      <div className="col-lg-4 col-md-6">
        <ChartCard
          type="bar"
          data={sipData}
          options={sipOptions}
          title="SIP Business Chart"
          subtitle="Monthly SIP Data"
          reportButton
        />
      </div>

      {/* Right: Monthly MIS */}
      <div className="col-lg-4 col-md-6">
        <ChartCard
          type="line"
          data={misData}
          options={misOptions}
          title="Monthly MIS"
          subtitle="Revenue vs Expenses"
          reportButton
        />
      </div>
    </div>
  );
}
