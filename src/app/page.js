'use client';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DashboardCard from './components/DashboardCard';
import ClientsChart from './components/ClientsChart';

export default function Page() {
  const [showReport, setShowReport] = useState(false);
  const [showTrend, setShowTrend] = useState(false);

  const handleShowReport = () => setShowReport(true);
  const handleCloseReport = () => setShowReport(false);

  const handleShowTrend = () => setShowTrend(true);
  const handleCloseTrend = () => setShowTrend(false);

  return (
    <div className="container-fluid py-3">

      {/* Primary Stats */}
      <div className="row g-3">
        {/* AUM Card */}
        <div className="col-12 col-lg-6">
          <div className="card metric-card h-100 shadow-sm border-0 hover-card">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="title mb-1 text-secondary">Current</div>
                <div className="d-flex align-items-end">
                  <div className="value display-5 fw-bold text-primary">AUM 12.19</div>
                  <div className="unit ms-1 text-muted fs-5">Cr</div>
                </div>
                <div className="trend mt-2 text-success">
                  <i className="fa-solid fa-caret-up me-1"></i>+0.77% MoM
                </div>
                <Button
                  variant="link"
                  className="link-success small mt-1 p-0"
                  onClick={handleShowTrend}
                >
                  View Trend →
                </Button>
              </div>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={handleShowReport}
              >
                View Report
              </Button>
            </div>
          </div>
        </div>

        {/* SIP Card */}
        <div className="col-12 col-lg-6">
          <div className="card metric-card h-100 shadow-sm border-0 hover-card">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="title mb-1 text-secondary">Current</div>
                <div className="d-flex align-items-end">
                  <div className="value display-5 fw-bold text-primary">SIP 1.39</div>
                  <div className="unit ms-1 text-muted fs-5">Lakh</div>
                </div>
                <div className="trend mt-2 text-success">
                  <i className="fa-solid fa-caret-up me-1"></i>+0% MoM
                </div>
                <Button
                  variant="link"
                  className="link-success small mt-1 p-0"
                  onClick={handleShowTrend}
                >
                  View Trend →
                </Button>
              </div>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={handleShowReport}
              >
                View Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Metrics */}
      <DashboardCard />

      {/* Charts */}
      <ClientsChart />

      {/* Report Modal */}
      <Modal show={showReport} onHide={handleCloseReport} centered>
        <Modal.Header closeButton>
          <Modal.Title>Detailed Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>यहां रिपोर्ट का डेटा या चार्ट आएगा।</p>
          <ul>
            <li>Transaction history</li>
            <li>Growth trends</li>
            <li>Performance analysis</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReport}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Trend Modal */}
      <Modal show={showTrend} onHide={handleCloseTrend} centered>
        <Modal.Header closeButton>
          <Modal.Title>Trend Overview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>यहां trend chart या analytics दिखा सकते हैं।</p>
          <p>Example: Last 6 months performance graph</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTrend}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
