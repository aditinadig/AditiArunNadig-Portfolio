import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import Navbar from "../Navbar";

function Home() {
  return (
    <Box>
      <Navbar />

      {/* Main Content Container */}
      <Box sx={{ textAlign: "center", position: "relative", mt: 16 }}>
        {/* Loading Bar */}
        <LinearProgress
          variant="indeterminate"
          sx={{
            width: "80px",
            height: "2px",
            backgroundColor: "var(--highlight-color)",
            mx: "auto",
            mb: 2,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "var(--text-color)",
            },
          }}
        />

        {/* Centered Typewriter Text */}
        <Typography
          variant="h2"
          className="typewriter" // Add the custom typing class here
          sx={{
            color: "var(--text-color)",
            fontSize: "var(--font-size-large)",
            fontFamily: "var(--font-mono)",
            mb: 4,
          }}
        >
          I am a developer.
        </Typography>

        {/* Scroll Down Arrow */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="body" sx={{ color: "var(--highlight-color)" }}>
            ↓
          </Typography>
        </Box>

        {/* Footer Prompt */}
        <Typography
          variant="body"
          sx={{ color: "var(--highlight-color)", mt: 4, display: "block" }}
        >
          Got something to have a conversation on? Ping me.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
