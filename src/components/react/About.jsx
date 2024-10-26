import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion

import Navbar from "../Navbar";
import IntroSection from "../about/IntroSection";
import BioSection from "../about/BioSection";
import HighlightCard from "../about/HighlightCard";
import { highlights } from "../about/aboutData";

// Function to return icon based on the name
function getIcon(iconName) {
  switch (iconName) {
    case "CodeIcon":
      return (
        <CodeIcon fontSize="large" sx={{ color: "var(--primary-color)" }} />
      );
    case "SchoolIcon":
      return (
        <SchoolIcon fontSize="large" sx={{ color: "var(--primary-color)" }} />
      );
    case "WorkIcon":
      return (
        <WorkIcon fontSize="large" sx={{ color: "var(--primary-color)" }} />
      );
    case "EmojiEmotionsIcon":
      return (
        <EmojiEmotionsIcon
          fontSize="large"
          sx={{ color: "var(--primary-color)" }}
        />
      );
    default:
      return null;
  }
}

// Animation variants for each section
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function About() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Animated Main Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box
          sx={{
            mt: 8,
            p: 8,
            color: "var(--text-color)",
            fontFamily: "var(--font-primary)",
          }}
        >
          {/* Intro and Bio Sections with slight fade-in and slide */}
          <IntroSection />
          <BioSection />

          {/* Highlights Section */}
          <Grid container spacing={3} justifyContent="center">
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                {/* Each Highlight Card with scale-in animation */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <HighlightCard
                    icon={getIcon(highlight.iconName)}
                    title={highlight.title}
                    description={highlight.description}
                    color={highlight.color}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
}

export default About;
