import { Container, Typography, Box, IconButton, Divider } from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { FooterSection, FooterContent, SocialLinks, Copyright } from "./styled";
import SoundcloudIcon from "./SoundcloudIcon";
// import soundcloud from "../../assets/images/soundcloud-logo.svg";

const Footer = () => {
  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: "https://linkedin.com/in/augusto-galuppo",
      label: "LinkedIn",
    },
    {
      icon: <GitHub />,
      url: "https://github.com/gutugaluppo",
      label: "GitHub",
    },
    {
      icon: <SoundcloudIcon />,
      // icon: soundcloud,
      url: "https://soundcloud.com/gutu_galuppo",
      label: "SoundCloud",
    },
    {
      icon: <Email />,
      url: "mailto:galuppodev@gmail.com",
      label: "Email",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container maxWidth="lg">
        <FooterContent>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Augusto Galuppo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend Software Developer
            </Typography>
          </Box>

          <SocialLinks>
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                sx={{
                  color: "#333",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </SocialLinks>

          <Divider
            sx={{ my: 3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          />

          <Copyright>
            <Typography variant="body2" color="text.secondary" align="center">
              © {currentYear} Augusto Galuppo. All rights reserved.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              align="center"
              sx={{ mt: 1 }}
            >
              Built with React - Vite, Typescript, Material UI & ❤️
            </Typography>
          </Copyright>
        </FooterContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;
