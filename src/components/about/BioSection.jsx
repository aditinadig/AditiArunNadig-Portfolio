// src/components/react/BioSection.jsx
import { Box, Typography } from "@mui/material";

function BioSection() {
  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", textAlign: "center", mb: 6 }}>
      <Typography
        variant="body2"
        sx={{ fontSize: "1rem", color: "var(--text-color)" }}
      >
        By day, I’m all about making secure web apps, clean code and making tech
        look good. By night? I’m hitting the high notes on stage, with over 80
        live performances under my belt across India. (Yes, I’ll happily debug
        code and sing your favorite song – just don’t ask for both at once.)
        <br />
        <br />
        I spent nearly two years at Oracle India, turning cloud puzzles into
        smooth solutions and wrangling front-end magic. Now, I’m at UIC, diving
        even deeper into secure web dev and full-stack wizardry. Whether it’s
        transforming user experiences or whipping up some backend brilliance,
        I’m all about making tech sing (pun totally intended).
        <br />
        <br />
        So, if you’re here to talk code, cloud, or maybe jam to some tunes,
        you’ve come to the right place. Let’s make some tech magic – or just
        swap some terrible puns. Your call!
      </Typography>
    </Box>
  );
}

export default BioSection;
