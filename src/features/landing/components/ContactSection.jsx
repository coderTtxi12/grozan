import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  containerStyleCenterColumn,
  glowButtonStyle,
} from "../../../styles/layoutStyles";

export default function ContactSection() {
  return (
    <Container sx={{ ...containerStyleCenterColumn, py: 8 }}>
      {/* Title section for large screens */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "text.primary",
            fontWeight: "bold",
          }}
        >
          Contáctanos
        </Typography>
      </Box>

      {/* Title section for small screens */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "text.primary",
            fontWeight: "bold",
          }}
        >
          Contáctanos
        </Typography>
      </Box>

      {/* Subtitle */}

      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        ¿Tienes alguna pregunta? Escríbenos en{" "}
        <Box
          component="a"
          href="mailto:hello@inseconds.ai"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              color: "primary.light",
            },
          }}
        >
          hola@grozan.com
        </Box>{" "}
        o complete el formulario a continuación.
      </Typography>

      {/* Contact form */}

      <Paper
        elevation={3}
        sx={{
          p: 4,
          bgcolor: "background.default",
          borderRadius: 2,
          width: "100%",
          maxWidth: 500,
          mb: 4,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            "& .MuiTextField-root": {
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            },
          }}
        >
          {/* Name */}

          <TextField
            variant="outlined"
            fullWidth
            required
            placeholder="Tu Nombre"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
                transition: "all 0.3s ease-in-out",
                "& fieldset": {
                  borderColor: "divider",
                  transition: "border-color 0.3s ease-in-out",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  boxShadow: (theme) =>
                    `0 0 10px ${theme.palette.primary.main}40`,
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "primary.main",
              },
            }}
          />

          {/* Email Address */}

          <TextField
            variant="outlined"
            fullWidth
            required
            type="email"
            placeholder="Tu Correo Electrónico"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
                transition: "all 0.3s ease-in-out",
                "& fieldset": {
                  borderColor: "divider",
                  transition: "border-color 0.3s ease-in-out",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  boxShadow: (theme) =>
                    `0 0 10px ${theme.palette.primary.main}40`,
                },
              },
            }}
          />

          {/* Message */}

          <TextField
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            placeholder="Escribe tu mensaje..."
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
                transition: "all 0.3s ease-in-out",
                "& fieldset": {
                  borderColor: "divider",
                  transition: "border-color 0.3s ease-in-out",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  boxShadow: (theme) =>
                    `0 0 10px ${theme.palette.primary.main}40`,
                },
              },
            }}
          />

          {/* Send Message Button */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              ...glowButtonStyle,
              mt: 2,
              minWidth: 250,
              alignSelf: "center", // Center in form
            }}
          >
            Enviar Mensaje
          </Button>
        </Box>
      </Paper>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        Or
      </Typography>

      {/* Schedule button */}

      <Button
        variant="outlined"
        color="primary"
        startIcon={<CalendarMonthIcon />}
        sx={{
          ...glowButtonStyle,
          minWidth: 250,
        }}
      >
        Agenda una Llamada
      </Button>
    </Container>
  );
}
