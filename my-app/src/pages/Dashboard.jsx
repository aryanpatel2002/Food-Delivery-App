import React from "react";
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

import chickSoup from "../Images/ChickSoup.png";
import coctailCombo from "../Images/CoctailCombo.png";
import healthyBowl from "../Images/HealthyBowl.png";
import steakMania from "../Images/Steak.png";

// Sample Data
const data = [
  { day: "Mon", sales: 40 },
  { day: "Tue", sales: 60 },
  { day: "Wed", sales: 35 },
  { day: "Thu", sales: 80 },
  { day: "Fri", sales: 55 },
  { day: "Sat", sales: 95 },
  { day: "Sun", sales: 70 },
];

const orderOverview = [
  { day: "Mon", orders: 200 },
  { day: "Tue", orders: 300 },
  { day: "Wed", orders: 250 },
  { day: "Thu", orders: 400 },
  { day: "Fri", orders: 350 },
  { day: "Sat", orders: 500 },
  { day: "Sun", orders: 420 },
];

const customerRate = [
  { day: "Mon", new: 30, returning: 20 },
  { day: "Tue", new: 50, returning: 25 },
  { day: "Wed", new: 40, returning: 20 },
  { day: "Thu", new: 70, returning: 35 },
  { day: "Fri", new: 55, returning: 25 },
  { day: "Sat", new: 80, returning: 40 },
  { day: "Sun", new: 60, returning: 30 },
];

const favourites = [
  { name: "Chicken Soup", img: chickSoup, rating: "4.5", likes: "129" },
  { name: "Coctail Combo", img: coctailCombo, rating: "4.3", likes: "120" },
  { name: "Healthy Bowl", img: healthyBowl, rating: "4.2", likes: "112" },
  { name: "Steak Mania", img: steakMania, rating: "4.7", likes: "135" },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Top Stats */}
      <div className="stats-row">
        <div className="card">
          <p>Total Menu</p>
          <h2>325</h2>
        </div>
        <div className="card">
          <p>Total Revenue</p>
          <h2>$425k</h2>
        </div>
        <div className="card">
          <p>Total Orders</p>
          <h2>415</h2>
        </div>
        <div className="card">
          <p>Total Customers</p>
          <h2>985</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column */}
        <div className="left-col">
          <div className="charts-row">
            <div className="card">
              <h3>Daily Revenue</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="card">
              <h3>Customer Flow</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#f97316" />
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
            <h3>Total Sale</h3>
            <h2>$254.90</h2>
            <p>6 total orders</p>
          </div>
          <div className="card">
            <h3>Total Sessions</h3>
            <h2>845</h2>
          </div>
          <div className="card">
            <h3>Customer Rate</h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={customerRate}>
                <XAxis dataKey="day" hide />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="new" stroke="#2563eb" />
                <Line type="monotone" dataKey="returning" stroke="#f97316" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card">
            <h3>Recent Activity</h3>
            <ul>
              <li>
                <b>10:10</b> New order received
              </li>
              <li>
                <b>09:30</b> 2 customers joined
              </li>
              <li>
                <b>08:40</b> Large delivery dispatched
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="card">
        <h3>Order Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={orderOverview}>
            <defs>
              <linearGradient id="orders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#orders)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card" style={{ width: "100%" }}>
        <h3>Favourite Items</h3>
        <div className="fav-grid">
          {favourites.map((item, i) => (
            <div key={i} className="fav-item">
              <div className="fav-img-wrapper">
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>
                  ⭐ {item.rating} · ❤️ {item.likes}
                </p>
              </div>
            </div>
          ))}
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

        .fav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
        }

        .fav-item {
          background: #f9fafb;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .fav-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .fav-img-wrapper {
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }

        .fav-img-wrapper img {
          width: 85%;
          height: 85%;
          object-fit: contain;
        }

        .fav-item div:last-child {
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
