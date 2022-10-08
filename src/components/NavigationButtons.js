import { IconButton, Box } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function NavigationButtons({
  onNextClick,
  onPerviousClick,
  disablePrevious,
  disableNext,
}) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <IconButton
        variant="outlined"
        size="large"
        onClick={onPerviousClick}
        disabled={disablePrevious}
        sx={{
          color: ({ palette }) => palette.common.white,
          borderColor: "rgba(255,255,255,0.4)",
          marginInlineEnd: 2,
          ":hover": {
            background: "rgba(255, 255, 255, 0.1)",
            borderColor: ({ palette }) => palette.common.white,
          },
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        variant="outlined"
        size="large"
        disabled={disableNext}
        onClick={onNextClick}
        sx={{
          color: ({ palette }) => palette.common.white,
          borderColor: "rgba(255,255,255,0.4)",
          ":hover": {
            background: "rgba(255, 255, 255, 0.1)",
            borderColor: ({ palette }) => palette.common.white,
          },
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
}

export default NavigationButtons;
