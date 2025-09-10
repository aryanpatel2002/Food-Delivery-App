import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

const revenueData = [
  { day: "Mon", sales: 1200 },
  { day: "Tue", sales: 1800 },
  { day: "Wed", sales: 1450 },
  { day: "Thu", sales: 2200 },
  { day: "Fri", sales: 1950 },
  { day: "Sat", sales: 2800 },
  { day: "Sun", sales: 2400 },
];

const orderData = [
  { day: "Mon", orders: 320 },
  { day: "Tue", orders: 410 },
  { day: "Wed", orders: 370 },
  { day: "Thu", orders: 520 },
  { day: "Fri", orders: 480 },
  { day: "Sat", orders: 650 },
  { day: "Sun", orders: 590 },
];

const customerRate = [
  { day: "Mon", new: 60, returning: 40 },
  { day: "Tue", new: 80, returning: 50 },
  { day: "Wed", new: 75, returning: 35 },
  { day: "Thu", new: 120, returning: 65 },
  { day: "Fri", new: 95, returning: 55 },
  { day: "Sat", new: 150, returning: 80 },
  { day: "Sun", new: 110, returning: 70 },
];

export default function AdminDashboard() {
  // state for settings
  const [deliveryFee, setDeliveryFee] = useState(30);
  const [commissionRate, setCommissionRate] = useState(15);
  const [taxRate, setTaxRate] = useState(5);

  const handleSave = () => {
    alert(
      `✅ Settings Saved:\nDelivery Fee: ₹${deliveryFee}\nCommission: ${commissionRate}%\nTax Rate: ${taxRate}%`
    );
  };

  return (
    <div className="dashboard">
      {/* Top Stats */}
      <div className="stats-row">
        <div className="card">
          <p>Total Restaurants</p>
          <h2>120</h2>
        </div>
        <div className="card">
          <p>Orders Today</p>
          <h2>845</h2>
        </div>
        <div className="card">
          <p>Revenue (This Week)</p>
          <h2>$12.4k</h2>
        </div>
        <div className="card">
          <p>Active Partners</p>
          <h2>315</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column */}
        <div className="left-col">
          <div className="charts-row">
            <div className="card">
              <h3>Delivery Revenue</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#2b9e44ff" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="card">
              <h3>Order Volume</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={orderData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#41cb619d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="right-col"
          style={{ gap: "24px", display: "flex", flexDirection: "column" }}
        >
          <div className="card">
            <h3>Orders Today</h3>
            <h2>845</h2>
            <p>Delivered: 720 · Pending: 125</p>
          </div>
          <div className="card">
            <h3>Active Users Online</h3>
            <h2>1,240</h2>
          </div>
          <div className="card">
            <h3>Customer Insights</h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={customerRate}>
                <XAxis dataKey="day" hide />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="new" stroke="#ff0b0bff" />
                <Line type="monotone" dataKey="returning" stroke="#164ff9ff" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card">
            <h3>Recent Activity</h3>
            <ul>
              <li>
                <b>12:15</b> Order #5842 delivered
              </li>
              <li>
                <b>11:50</b> New restaurant onboarded: "Spice Hub"
              </li>
              <li>
                <b>11:10</b> Payment of $420 processed to partner
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="card" style={{ width: "100%" }}>
        <h3>Admin Settings</h3>
        <div className="settings-form">
          <label>
            Delivery Fee (₹)
            <input
              type="number"
              value={deliveryFee}
              onChange={(e) => setDeliveryFee(e.target.value)}
            />
          </label>
          <label>
            Commission Rate (%)
            <input
              type="number"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
            />
          </label>
          <label>
            Tax Rate (%)
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            />
          </label>
          <button onClick={handleSave}>Save Changes</button>
        </div>
      </div>

      {/* Styling */}
      <style>{`
        .dashboard {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }

        .main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .charts-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }

        .card {
          background: #fff;
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
        }

        .card h2 {
          font-size: 22px;
          font-weight: bold;
        }

        .settings-form {
          display: grid;
          gap: 16px;
          margin-top: 16px;
        }

        .settings-form label {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .settings-form input {
          margin-top: 6px;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
        }

        .settings-form button {
          margin-top: 12px;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          background: #2563eb;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .settings-form button:hover {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
}

