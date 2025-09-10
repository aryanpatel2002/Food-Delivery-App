import React from "react";

export default function Header() {
  return (
    <header className="header">

      <div className="search-box">
        <input type="text" placeholder="Search for menu, customers, orders..." />
      </div>


      <div className="profile">
        <span className="bell">🔔</span>
        <div className="avatar">A</div>
      </div>

      <style>{`
        .header {
          height: 60px;
          background: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          box-shadow: 0 1px 5px rgba(0,0,0,0.05);
        }
        .search-box {
          flex: 1;
          max-width: 400px;
          position: relative;
        }
        .search-box input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 30px;
          border: 1px solid #ddd;
          background: #f9f9f9;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
          outline: none;
          transition: all 0.3s;
        }
        .search-box input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 5px #93c5fd;
        }
        .profile {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .bell {
          cursor: pointer;
          font-size: 18px;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}