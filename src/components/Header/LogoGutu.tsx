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
          },
        }}
      >
        G
      </Typography>
    </Box>
  );
};

export default LogoGutu;
