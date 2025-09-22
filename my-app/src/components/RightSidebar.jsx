import React from "react";

export default function RightSidebar() {
  return (
    <aside className="rightbar">
      <div className="card">
        <p>Total Sale</p>
        <h2>$254.90</h2>
        <small>+6 orders today</small>
      </div>

      <div className="card">
        <p>Total Sessions</p>
        <h2>845</h2>
        <small>4 live visitors</small>
      </div>

      <div className="card">
        <p>Customer Rate</p>
        <h2>5.12%</h2>
        <small>Returning vs New</small>
      </div>

      <div className="card">
        <h3>Recent Activity</h3>
        <p>10:10 - Prathmesh placed an order</p>
        <p>08:40 - Mayur added new dish</p>
      </div>

      <style>{`
        .rightbar {
          width: 260px;
          background: #fff;
          padding: 16px;
          box-shadow: -1px 0 6px rgba(0,0,0,0.05);
          overflow-y: auto;
        }
        .rightbar .card {
          background: #f9fafb;
          padding: 14px;
          border-radius: 12px;
          margin-bottom: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .rightbar h2 {
          font-size: 20px;
          margin: 5px 0;
        }
        .rightbar small {
          color: #666;
        }
      `}</style>
    </aside>
  );
}