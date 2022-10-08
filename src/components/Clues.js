import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import CluesPhase from "./CluesPhase";

const cluesPhaseOne = [
  {
    text: "You talk about this a lot",
  },
  {
    text: "We only did it one time together",
  },
  {
    text: "Nobody in the world could have done it for almost 2 years because of covid-19",
  },
];
const cluesPhaseTwo = [
  {
    text: "won the world cup in 2006",
  },
  {
    text: "There was a participant in Master Chef that was from this country and cooked only dishes from his there.",
  },
  {
    text: "The country looks on the globe like a fashion object",
  },
];
const CORRECT_ANSWERS_PHASE_ONE = ["טיסה לחול", "טיסה לחו״ל"];
const CORRECT_ANSWERS_PHASE_TWO = ["איטליה"];
const goldenCluePhaseOne = "We did it on our honeymoon";
const goldenCluePhaseTwo = "Your favorite food is originally from this country";
const phaseOneQuestion = "What are we going to do for your birthday?";
const phaseTwoQuestion = "Where are we going?";

function Clues({ onFinish }) {
  const [cluesPhase, setCluesPhase] = useState(0);
  const [shouldShowPhaseOneFinish, setShouldShowPhaseOneFinish] =
    useState(false);
  const handleFinishPhaseOne = () => setShouldShowPhaseOneFinish(true);
  const handleFinishPhaseTwo = () => onFinish();
  const handleDialogClose = () => {
    setShouldShowPhaseOneFinish(false);
    setCluesPhase(1);
  };
  return (
    <>
      <Box>
        {cluesPhase === 0 ? (
          <CluesPhase
            onFinish={handleFinishPhaseOne}
            clues={cluesPhaseOne}
            correctAnswers={CORRECT_ANSWERS_PHASE_ONE}
            goldenClue={goldenCluePhaseOne}
            question={phaseOneQuestion}
          />
        ) : (
          <CluesPhase
            onFinish={handleFinishPhaseTwo}
            clues={cluesPhaseTwo}
            correctAnswers={CORRECT_ANSWERS_PHASE_TWO}
            goldenClue={goldenCluePhaseTwo}
            question={phaseTwoQuestion}
          />
        )}
      </Box>
      {shouldShowPhaseOneFinish && (
        <Dialog open fullScreen>
          <DialogContent
            sx={{
              background: ({ palette }) => palette.secondary.light,
              padding: 2,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              sx={{ color: "white" }}
            >
              <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 3 }}>
                You are correct!!
              </Typography>
              <Typography variant="h3" sx={{ marginBottom: 3 }}>
                🥳🥳🎊 🎉🎊 🎉
              </Typography>
              <Typography variant="h4" sx={{ marginBottom: 3 }}>
                We are going to fly abroad
              </Typography>
              <iframe
                src="https://giphy.com/embed/j6wXZ0PAa4gBw99Kmh"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
              <Button
                variant="outlined"
                size="large"
                onClick={handleDialogClose}
                sx={{
                  color: ({ palette }) => palette.common.white,
                  marginTop: 2,
                  borderColor: "rgba(255,255,255,0.4)",
                  ":hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                    borderColor: ({ palette }) => palette.common.white,
                  },
                }}
              >
                Continue to next clue
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default Clues;
