import * as React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./dashboard";
export default function ClippedDrawer() {
  return (
    
    <div>
    <Header />
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Dashboard />
    </div>
    <Footer />
  </div>
  );
}
