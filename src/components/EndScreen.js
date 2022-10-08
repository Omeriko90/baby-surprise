import { Typography, Box, Button } from "@mui/material";
import React from "react";

function EndScreen({ onClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingInline: 1,
      }}
    >
      <Box display="flex" textAlign="center" mb={4}>
        <Typography variant="h4" fontFamily="Alfa Slab One">
          Are you ready to find out what's your birthday surprise?
        </Typography>
      </Box>

      <Button
        variant="outlined"
        size="large"
        onClick={onClick}
        sx={{
          color: ({ palette }) => palette.common.white,
          borderColor: "rgba(255,255,255,0.4)",
          ":hover": {
            background: "rgba(255, 255, 255, 0.1)",
            borderColor: ({ palette }) => palette.common.white,
          },
        }}
      >
        Click here to find out
      </Button>
    </Box>
  );
}

export default EndScreen;
