import React from "react";

export default function Sidebar() {
  const menuItems = ["Dashboard", "Orders", "Analytics", "Customers"];

  return (
    <div className="sidebar">
      <div className="logo">Flavourz</div>
      <nav>
        {menuItems.map((item, i) => (
          <a key={i} href="#" className="menu-item">
            {item}
          </a>
        ))}
      </nav>

      <style>{`
        .sidebar {
          width: 220px;
          background: #fff;
          box-shadow: 0 0 8px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .logo {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          border-bottom: 1px solid #eee;
        }
        .menu-item {
          display: block;
          padding: 12px 16px;
          color: #333;
          text-decoration: none;
          border-radius: 6px;
          margin: 4px 8px;
          transition: background 0.2s;
        }
        .menu-item:hover {
          background: #f3f4f6;
        }
      `}</style>
    </div>
  );
}