// src/components/react/IntroSection.jsx
import { Box, Typography } from "@mui/material";

function IntroSection() {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Hey there, I'm Aditi Arun Nadig!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "var(--subtext-color)",
          fontSize: "1.1rem",
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        – a full-stack dev, MSCS student, and occasionally a rockstar (literally). 
      </Typography>
    </Box>
  );
}

export default IntroSection;
