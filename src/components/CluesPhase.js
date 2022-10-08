import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import NavigationButtons from "./NavigationButtons";

function CluesPhase({ onFinish, clues, correctAnswers, goldenClue, question }) {
  const [clueIndex, setClueIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [shouldShowGoldenClue, setShouldShowGoldenClue] = useState(false);

  useEffect(() => {
    setClueIndex(0);
    setGuess("");
  }, [goldenClue]);

  const hideGoldenClue = () => setShouldShowGoldenClue(false);
  const handleNextClick = () => {
    setClueIndex((prevState) => prevState + 1);
    hideGoldenClue();
  };
  const handlePreviousClick = () => {
    setClueIndex((prevState) => prevState - 1);
    hideGoldenClue();
  };
  const handleShowGoldenClueClick = () =>
    setShouldShowGoldenClue((prevState) => !prevState);
  const handleGuessChange = ({ target: { value } }) => {
    setGuess(value);
    setIsWrongAnswer(false);
  };
  const handleGuessSubmit = () => {
    if (correctAnswers.includes(guess)) {
      onFinish();
    } else {
      setIsWrongAnswer(true);
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingInline: 2 }}>
      <Box
        mb={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" textAlign="center" mb={2}>
          <Typography variant="h3">{question}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          {!shouldShowGoldenClue && (
            <Box
              mb={2}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              px={2}
            >
              <Typography
                variant="h6"
                textAlign="center"
                sx={{ marginInlineEnd: "4px" }}
              >
                Clue {clueIndex + 1}:
              </Typography>
              {clues.map((clue, index) => (
                <>
                  {index === clueIndex && (
                    <Typography
                      key={index}
                      variant="h6"
                      className="cluesIn"
                      textAlign="center"
                      sx={{ color: ({ palette }) => palette.common.white }}
                    >
                      {clue.text}
                    </Typography>
                  )}
                </>
              ))}
            </Box>
          )}
          {shouldShowGoldenClue && (
            <Box mb={2} display="flex" flexDirection="column">
              <Typography
                variant="h6"
                textAlign="center"
                sx={{ marginInlineEnd: "4px", whiteSpace: "nowrap" }}
              >
                Golden clue:
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: ({ palette }) => palette.common.white }}
              >
                {goldenClue}
              </Typography>
            </Box>
          )}
          <NavigationButtons
            onNextClick={handleNextClick}
            onPerviousClick={handlePreviousClick}
            disableNext={clueIndex === clues.length - 1 || shouldShowGoldenClue}
            disablePrevious={clueIndex === 0 || shouldShowGoldenClue}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%">
          <TextField
            placeholder="Enter you guess"
            value={guess}
            variant="outlined"
            onChange={handleGuessChange}
            error={isWrongAnswer}
            sx={{
              marginBottom: 2,
              input: {
                color: "white",
              },
              fieldSet: {
                borderColor: ({ palette }) =>
                  `${palette.common.white} !important`,
              },
            }}
            inputProps={{
              style: {
                color: ({ palette }) => palette.common.white,
              },
            }}
            helperText={isWrongAnswer ? "Wrong answer" : ""}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={2}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={handleGuessSubmit}
              sx={{
                color: ({ palette }) => palette.common.white,
                marginBottom: 2,
                borderColor: "rgba(255,255,255,0.4)",
                ":hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderColor: ({ palette }) => palette.common.white,
                },
              }}
            >
              Submit Guess
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleShowGoldenClueClick}
              sx={{
                color: ({ palette }) => palette.common.white,
                borderColor: "rgba(255,255,255,0.4)",
                ":hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderColor: ({ palette }) => palette.common.white,
                },
              }}
            >
              {!shouldShowGoldenClue ? "Show " : " Hide "}
              Golden Clue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CluesPhase;
