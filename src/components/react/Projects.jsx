// src/components/react/Projects.jsx
import { Grid, Box } from "@mui/material";
import Navbar from "../Navbar";
import ProjectCard from "../project/ProjectCard.jsx";
import { projects } from "../project/projectData.js";

function Projects() {
  return (
    <Box>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content container with marginTop to avoid overlap */}
      <Box
        sx={{
          p: 8,
          mt: 16,
        }}
      >
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
