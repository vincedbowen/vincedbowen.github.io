"use client";

import BlobBackground from "./BlobBackground";
import Sidebar from "./Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AppShell({ children }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <BlobBackground>
            <Sidebar />
            <main style={{
                marginLeft: isMobile ? 0 : 240,
                position: "relative",
                zIndex: 100,
            }}
            >
                {children}
            </main>
        </BlobBackground>
    );
}