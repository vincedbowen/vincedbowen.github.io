"use client";

import BlobBackground from "./BlobBackground";
import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  return (
    <BlobBackground>
      <Sidebar />
      <main style={{ marginLeft: 240, position: "relative", zIndex: 100 }}>
        {children}
      </main>
    </BlobBackground>
  );
}