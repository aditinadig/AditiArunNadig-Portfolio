import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        background: "var(--bg-color)",
        color: "var(--text-color)",
        height: "24rem",
        borderRadius: "12px",
        border: "1px solid var(--subtext-color)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* Image Section */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="160"
          image={project.image}
          alt={project.title}
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content Section */}
      <CardContent sx={{ padding: "1.5rem" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "var(--primary-color)",
            mb: 1,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--subtext-color)",
            lineHeight: 1.6,
            mb: 2,
            maxHeight: "4.5rem",
          }}
        >
          {project.description}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default ProjectCard;