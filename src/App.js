import React, { useState } from "react";
import { Box } from "@mui/material";
import Timer from "./components/Timer";
import EndScreen from "./components/EndScreen";
import CluesPhase from "./components/Clues";
import Surprise from "./components/Surprise";

function App() {
  const [isTimeOver, setIsTimeOver] = useState(true);
  const [shouldShowClues, setShouldShowClues] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleFinishTimer = () => setIsTimeOver(true);
  const handleMoveToClues = () => setShouldShowClues(true);
  const handleFinishedGuesses = () => setShowSurprise(true);
  return (
    <Box
      sx={{
        background: ({ palette }) => palette.secondary.light,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        alignItems: showSurprise ? "initial" : "center",
        justifyContent: showSurprise ? "initial" : "center",
        color: ({ palette }) => palette.common.white,
      }}
    >
      {showSurprise ? (
        <Surprise />
      ) : isTimeOver ? (
        <>
          {shouldShowClues ? (
            <CluesPhase onFinish={handleFinishedGuesses} />
          ) : (
            <Box>
              <EndScreen onClick={handleMoveToClues} />
            </Box>
          )}
        </>
      ) : (
        <Timer onFinish={handleFinishTimer} />
      )}
    </Box>
  );
}

export default App;
