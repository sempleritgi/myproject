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
          <div className="card metric-card shadow-sm border rounded-3 h-100 position-relative">
            <div className="card-body">
              
              {/* Top Right Report Button */}
              <Button
                size="sm"
                className="position-absolute top-0 end-0 m-2"
                onClick={handleShowReport}
                style={{
                  backgroundColor: "#ffe5e5", // हल्का लाल background
                  color: "red",
                  borderColor: "red",
                }}
              >
                View Report
              </Button>

              {/* Main Content */}
              <p className="text-center text-muted small mb-1 fw-bold">Current</p>
              <h4 className="text-center fw-bold mb-0">
                AUM <span className="text-dark">12.19</span>
                <span className="ms-1 text-muted fs-6">Cr</span>
              </h4>
              <p className="text-center text-success small mt-1 mb-0">
                ▲ +0.77% MoM
              </p>

              {/* Bottom Right Trend Button */}
              <div className="d-flex justify-content-end mt-2">
                <Button 
                  variant="link" 
                  className="p-0 text-decoration-none text-success fw-semibold small"
                  onClick={handleShowTrend}
                >
                  View Trend →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* SIP Card */}
        <div className="col-12 col-lg-6">
          <div className="card metric-card shadow-sm border rounded-3 h-100 position-relative">
            <div className="card-body">
              
              {/* Top Right Report Button */}
              <Button
                size="sm"
                className="position-absolute top-0 end-0 m-2"
                onClick={handleShowReport}
                style={{
                  backgroundColor: "#ffe5e5", // हल्का लाल background
                  color: "red",
                  borderColor: "red",
                }}
              >
                View Report
              </Button>

              {/* Main Content */}
              <p className="text-center text-muted small mb-1 fw-bold">Current</p>
              <h4 className="text-center fw-bold mb-0">
                SIP <span className="text-center text-dark">1.39</span>
                <span className="text-center ms-1 text-muted fs-6">Lakh</span>
              </h4>
              <p className="text-center text-success small mt-1 mb-0">
                ▲ +0% MoM
              </p>

              {/* Bottom Right Trend Button */}
              <div className="d-flex justify-content-end mt-2">
                <Button 
                  variant="link" 
                  className="p-0 text-decoration-none text-success fw-semibold small"
                  onClick={handleShowTrend}
                >
                  View Trend →
                </Button>
              </div>
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
