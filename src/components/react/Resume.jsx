import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Navbar from "../Navbar";

const Resume = () => {
  const handleDownload = () => {
    // Trigger file download
    const link = document.createElement("a");
    link.href = "/public/Fresh CV.pdf"; // Ensure the file path is correct
    link.download = "Aditi_Resume.pdf"; // File name after download
    link.click();
  };

  return (
    <Box>
      {/* Navbar at the top */}
      <Navbar />
      <Box
        sx={{
          p: 8,
          mt: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "98%",
          minHeight: "100vh",
          padding: "2rem",
          backgroundColor: "var(--bg-color)",
          borderRadius: "12px",
          boxShadow: 4,
          gap: "1.5rem",
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "var(--text-color)",
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            My Resume
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "var(--subtext-color)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Here’s a quick look at my professional resume. You can scroll
            through it below or click the download button to get a copy!
          </Typography>
        </Box>

        {/* Download Button */}
        {/* <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          sx={{
            mt: 2,
            padding: "0.8rem 2rem",
            backgroundColor: "var(--text-color)",
            color: "var(--bg-color)",
            textTransform: "capitalize",
            borderRadius: "24px",
            "&:hover": {
              backgroundColor: "var(--subtext-color)",
            },
          }}
        >
          Download Resume
        </Button> */}

        {/* PDF Viewer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "80rem",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <Box
            component="iframe"
            src="/Fresh CV.pdf"
            type="application/pdf"
            sx={{
              width: "100%",
              minHeight: "700px",
              border: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
