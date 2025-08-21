"use client";
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  FaHandHoldingUsd,
  FaShoppingBasket,
  FaProjectDiagram,
  FaBan,
  FaChartLine,
} from "react-icons/fa";

import "../../styles/globals.css";

export default function DashboardCard() {
  const [activeFilter, setActiveFilter] = useState("3 Days");

  const filters = ["3 Days", "7 Days", "10 Days", "30 Days"];

  const metrics = [
    { id: 1, icon: <FaHandHoldingUsd size={50} color="red" />, title: "Purchases", amount: "0.00 INR" },
    { id: 2, icon: <FaShoppingBasket size={50} color="red" />, title: "Redemptions", amount: "0.00 INR" },
    { id: 3, icon: <FaProjectDiagram size={50} color="red" />, title: "Reg. Transactions", amount: "0.00 INR" },
    { id: 4, icon: <FaBan size={50} color="red" />, title: "SIP Rejections", amount: "0.00 INR", report: true },
    { id: 5, icon: <FaChartLine size={50} color="red" />, title: "New SIP", amount: "0.00 INR", report: true },
  ];

  return (
    <div className="dashboard-container">
      {/* Big Card */}
      <div className="big-card p-3">

        {/* Filter Table */}
        <div className="d-flex justify-content-start mb-3 overflow-auto">
          <Table bordered size="sm" className="w-auto mb-0 flex-nowrap">
            <tbody>
              <tr>
                {filters.map((f) => (
                  <td key={f} className="p-1">
                    <Button
                      variant={activeFilter === f ? "danger" : "outline-secondary"}
                      size="sm"
                      onClick={() => setActiveFilter(f)}
                    >
                      {f}
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Metrics in a horizontal scrollable row on mobile */}
        <div className="d-flex justify-content-between align-items-center metrics-wrapper flex-wrap flex-lg-nowrap overflow-auto">
          {metrics.map((m, index) => (
            <div
              key={m.id}
              className="d-flex align-items-center px-3 flex-shrink-0 mb-3 mb-lg-0"
              style={{ minWidth: "180px", borderRight: index !== metrics.length - 1 ? "1px solid #ddd" : "none" }}
            >
              {/* Icon and content */}
              <div className="d-flex align-items-center gap-2">
                {m.icon}
                <div className="d-flex flex-column">
                  {/* View Report button above title */}
                  {m.report && (
                    <Button
                      size="sm"
                      className="mb-1"
                      style={{
                        backgroundColor: "#f8d7da", // halka red background
                        color: "#dc3545", // red text
                        border: "1px solid #f5c2c7"
                      }}
                    >
                      View Report
                    </Button>
                  )}
                  <div className="title">{m.title}</div>
                  <hr className="my-1" style={{ width: "100%" }} />
                  <div className="amount">{m.amount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
