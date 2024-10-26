// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Link, Box } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000, mb: 12 }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          padding: "20px",
          backgroundColor: "var(--bg-color)", // Set the background color here
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Box display="flex" gap={3}>
            <Link
              href="/"
              underline="none"
              sx={{
                color: "var(--text-color)",
                fontSize: "var(--font-size-small)",
                textTransform: "lowercase",
              }}
            >
              home.
            </Link>
            <Link
              href="/about"
              underline="none"
              sx={{
                color: "var(--text-color)",
                fontSize: "var(--font-size-small)",
                textTransform: "lowercase",
              }}
            >
              about me.
            </Link>
            <Link
              href="/resume"
              underline="none"
              sx={{
                color: "var(--text-color)",
                fontSize: "var(--font-size-small)",
                textTransform: "lowercase",
              }}
            >
              resume.
            </Link>
            <Link
              href="/contact"
              underline="none"
              sx={{
                color: "var(--text-color)",
                fontSize: "var(--font-size-small)",
                textTransform: "lowercase",
              }}
            >
              contact.
            </Link>
            <Link
              href="/projects"
              underline="none"
              sx={{
                color: "var(--text-color)",
                fontSize: "var(--font-size-small)",
                textTransform: "lowercase",
              }}
            >
              projects.
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
