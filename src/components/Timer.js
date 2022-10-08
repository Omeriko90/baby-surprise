import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import moment from "moment";

const DEADLINE = moment("2022-10-11 20:30:00.000");
function Timer({ onFinish }) {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    setTimer(interval);

    return () => clearInterval(timer);
  }, []);

  function updateTime() {
    const newTime = moment();
    if (newTime.isSame(DEADLINE)) {
      onFinish();
    }
    const duration = moment.duration(DEADLINE.diff(newTime));

    setDays(duration.days());
    setHours(duration.hours());
    setMinutes(duration.minutes());
    setSeconds(duration.seconds());
  }

  return (
    <>
      <Box mb={2}>
        <Typography
          variant="h2"
          fontFamily="Alfa Slab One"
          sx={{ color: ({ palette }) => palette.common.white }}
        >
          Time until baby's surprise 😍
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: ({ palette }) => palette.background.paper,
          margin: "0 auto",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: ({ spacing }) => spacing(15),
            borderInlineEnd: `1px solid rgba(255,255,255,0.3)`,
            padding: 2,
          }}
        >
          <Typography variant="h5">{days}</Typography>
          <Typography variant="h5">{days > 1 ? "Days" : "Day"}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: ({ spacing }) => spacing(15),
            borderInlineEnd: `1px solid rgba(255,255,255,0.3)`,
            padding: 2,
          }}
        >
          <Typography variant="h5">{hours}</Typography>
          <Typography variant="h5">{hours > 1 ? "Hours" : "hour"}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: ({ spacing }) => spacing(15),
            borderInlineEnd: `1px solid rgba(255,255,255,0.3)`,
            padding: 2,
          }}
        >
          <Typography variant="h5">{minutes}</Typography>
          <Typography variant="h5">
            {minutes > 1 ? "Minutes" : "Minute"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: ({ spacing }) => spacing(15),
            padding: 2,
          }}
        >
          <Typography variant="h5">{seconds}</Typography>
          <Typography variant="h5">
            {seconds > 1 ? "Seconds" : "Second"}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Timer;
