import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import RightSidebar from "./components/RightSidebar";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-section">
          <Header />

          <div className="content-area">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Dashboard />
                    <RightSidebar />
                  </>
                }
              />
              <Route
                path="/AdminDashboard"
                element={
                  <>
                    <AdminDashboard />
                    <RightSidebar />
                  </>
                }
              />
            </Routes>
          </div>
        </div>

        <style>{`
          .app-container {
            display: flex;
            height: 100vh;
            background: #f9fafb;
            font-family: Arial, sans-serif;
          }
          .main-section {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .content-area {
            flex: 1;
            display: flex;
            overflow-y: auto;
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}
