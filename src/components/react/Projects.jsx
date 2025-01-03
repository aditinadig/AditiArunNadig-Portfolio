import { Grid, Box, Typography, Divider } from "@mui/material";
import Navbar from "../Navbar";
import ProjectCard from "../project/ProjectCard.jsx";
import { projects } from "../project/projectData.js";

function Projects() {
  return (
    <Box sx={{ backgroundColor: "var(--bg-color)", minHeight: "100vh" }}>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content container */}
      <Box
        sx={{
          p: { xs: 3, sm: 6, md: 8 },
          mt: 8,
          textAlign: "center",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "var(--text-color)",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "var(--subtext-color)",
            mb: 4,
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Explore the projects I’ve built across web development, UI/UX
          design, and machine learning. Each project showcases my skills
          and passion for creating impactful digital solutions.
        </Typography>

        <Divider
          sx={{
            borderBottomWidth: 2,
            width: "10%",
            margin: "1.5rem auto",
            backgroundColor: "var(--primary-color)",
          }}
        />

        {/* Project Grid */}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>


    </Box>
  );
}

export default Projects;