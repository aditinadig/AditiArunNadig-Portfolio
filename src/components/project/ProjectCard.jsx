// src/components/ProjectCard.jsx
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        background: "var(--bg-color)",
        color: "var(--text-color)",
        boxShadow: "none",
        borderRadius: "4px",
        border: "1px solid var(--subtext-color)",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "var(--primary-color)" }}
        >
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--subtext-color)" }}>
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;