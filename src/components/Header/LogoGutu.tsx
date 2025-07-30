import { Box, Typography } from "@mui/material";

const LogoGutu = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Monofett",
          fontWeight: 300,
          "&:hover": {
            cursor: "pointer",
            color: "rgba(0, 0, 0, 0.6)",
            transform: "scale(1.1)",
            transition: "all 0.6s ease-in-out",
          },
        }}
      >
        G
      </Typography>
    </Box>
  );
};

export default LogoGutu;
