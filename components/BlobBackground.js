"use client";

import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

// === Lava Lamp Background Settings ===
const BACKGROUND_COLOR = "#d6e8fa"; // Slightly more blue than before
const BLOB_COLOR = "100,160,240"; 
const BLOB_COUNT = 6;

const rand = (min, max) => Math.random() * (max - min) + min;

const blobs = Array.from({ length: BLOB_COUNT }, (_, i) => ({
  id: i,
  top: rand(8, 85) + "%",
  left: rand(8, 85) + "%",
  size: rand(420, 680),
  initialScale: rand(0.9, 1.13),
  pulse: rand(0.10, 0.18),
  animDuration: rand(70, 110),
  delay: rand(0, 7),
}));

function getRandomKeyframes(start) {
  const p = () => {
    const base = parseFloat(start);
    const offset = rand(-6, 6);
    return Math.max(8, Math.min(92, base + offset)) + "%";
  };
  return [start, p(), p(), p(), start];
}

function AnimatedBlob({ blob, zIndex }) {
  const blobGradient = `radial-gradient(circle at 55% 50%,
    rgba(${BLOB_COLOR},0.22) 0%,
    rgba(${BLOB_COLOR},0.14) 40%,
    rgba(${BLOB_COLOR},0.10) 55%,
    rgba(${BLOB_COLOR},0.08) 70%,
    rgba(${BLOB_COLOR},0.05) 82%,
    rgba(${BLOB_COLOR},0.02) 93%,
    rgba(${BLOB_COLOR},0.00) 100%
  )`;

  return (
    <motion.div
      initial={{
        scale: blob.initialScale,
        top: blob.top,
        left: blob.left,
        opacity: 0.72,
      }}
      animate={{
        scale: [
          blob.initialScale,
          blob.initialScale + blob.pulse,
          blob.initialScale - blob.pulse / 2,
          blob.initialScale,
        ],
        top: getRandomKeyframes(blob.top),
        left: getRandomKeyframes(blob.left),
        opacity: [0.65, 0.82, 0.62],
      }}
      transition={{
        duration: blob.animDuration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: blob.delay,
      }}
      style={{
        position: "absolute",
        width: blob.size,
        height: blob.size,
        borderRadius: "50% / 48% 52% 56% 44%",
        background: blobGradient,
        filter: "blur(19px)",
        mixBlendMode: "lighter",
        pointerEvents: "none",
        zIndex,
      }}
    />
  );
}

function FullPageBackdropBlur() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    />
  );
}

export default function BlobBackground({ children }) {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: BACKGROUND_COLOR,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {blobs.map((blob, i) => (
          <AnimatedBlob blob={blob} key={blob.id} zIndex={i + 1} />
        ))}
        <FullPageBackdropBlur />
      </Box>
      <Box sx={{ position: "relative", zIndex: 100 }}>
        {children}
      </Box>
    </Box>
  );
}

