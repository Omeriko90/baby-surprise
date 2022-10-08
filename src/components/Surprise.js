import React from "react";
import { Box, Typography } from "@mui/material";

function Surprise() {
  return (
    <Box mt={4} px={2}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Pack up your things cause we are going to:
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 4 }}>
        Venice & Milano🇮🇹🇮🇹
      </Typography>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/VJqizbJsa98"
        title="YouTube video player"
        frameborder="0"
      ></iframe>
    </Box>
  );
}

export default Surprise;
