// src/components/react/Contact.jsx
import { Box, TextField, Button, Typography } from "@mui/material";
import Navbar from "../Navbar";

function Contact() {
  return (
    <Box sx={{ padding: "var(--spacing-lg)" }}>
      <Navbar />
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: 3,
          background: "rgba(18, 18, 18, 0.9)",
          border: "1px solid var(--subtext-color)",
          borderRadius: "4px",
          mt: 16,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "var(--text-color)", textAlign: "center", mb: 3 }}
        >
          Contact Me
        </Typography>
        <form
          action="mailto:aditiarunnadig@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <TextField
            label="Name"
            name="name" // Add name attribute
            fullWidth
            margin="normal"
            required
            InputLabelProps={{ style: { color: "var(--subtext-color)" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--subtext-color)", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "var(--subtext-color)", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--subtext-color)", // Border color when focused
                },
              },
              "& .MuiInputBase-root": { color: "var(--text-color)" },
            }}
          />

          <TextField
            label="Message"
            name="message" // Add name attribute
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
            InputLabelProps={{ style: { color: "var(--subtext-color)" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--subtext-color)", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "var(--subtext-color)", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--subtext-color)", // Border color when focused
                },
              },
              "& .MuiInputBase-root": { color: "var(--text-color)" },
            }}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "var(--text-color)",
              color: "var(--bg-color)",
              "&:hover": { backgroundColor: "var(--subtext-color)" },
            }}
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
