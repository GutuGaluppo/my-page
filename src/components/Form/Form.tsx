import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import {
  Box,
  CardContent,
  Stack,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ContactForm,
  FormCard,
  StyledContainer,
  StyledExperienceItem,
  SubmitButton,
} from "./styled";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);

    setSnackbar({
      open: true,
      message: "Thank you for your message! I'll get back to you soon.",
      severity: "success",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  // const handleCloseSnackbar = () => {
  //   setSnackbar((prev) => ({ ...prev, open: false }));
  // };

  return (
    <>
      <StyledContainer maxWidth="md" id="contact">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <StyledExperienceItem header="Send me your message">
            <CardContent sx={{ p: 4 }} id="cardContent">
              <Box onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                  />

                  <SubmitButton
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                  >
                    Send Your Message
                  </SubmitButton>
                </Stack>
              </Box>
            </CardContent>
          </StyledExperienceItem>
        </motion.div>
      </StyledContainer>
      {/* <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default Form;
