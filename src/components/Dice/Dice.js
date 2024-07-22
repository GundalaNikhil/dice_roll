import React, { useCallback, useState } from "react";
import { useStyles } from "./DiceStyles/DiceStyles";
import {
  BsDice1,
  BsDice2,
  BsDice3,
  BsDice4,
  BsDice5,
  BsDice6,
} from "react-icons/bs";

import { Button, Typography, Box } from "@mui/material";

const diceIcons = [BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6];

const Dice = () => {
  const classes = useStyles();
  const [dice, setDice] = useState({
    diceOne: Math.floor(Math.random() * 6) + 1,
    diceTwo: Math.floor(Math.random() * 6) + 1,
    isRolling: false,
    totalScore: 0,
  });

  const rollDice = useCallback(() => {
    setDice((prev) => ({ ...prev, isRolling: true }));
    setTimeout(() => {
      const newValueOne = Math.floor(Math.random() * 6) + 1;
      const newValueTwo = Math.floor(Math.random() * 6) + 1;
      setDice({
        diceOne: newValueOne,
        diceTwo: newValueTwo,
        isRolling: false,
        totalScore: newValueOne + newValueTwo,
      });
    }, 1000);
  }, [setDice]);

  const DiceIconOne = diceIcons[dice.diceOne - 1];
  const DiceIconTwo = diceIcons[dice.diceTwo - 1];

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Roll the Dice
      </Typography>
      <div onClick={rollDice} disabled={dice.isRolling}>
        <div className={classes.diceContainer}>
          <div
            className={`${classes.diceRoot} ${
              dice.isRolling ? classes.rolling : ""
            }`}
          >
            <div className={classes.diceFace}>
              <DiceIconOne />
            </div>
          </div>
          <div
            className={`${classes.diceRoot} ${
              dice.isRolling ? classes.rollingTwo : ""
            }`}
          >
            <div className={classes.diceFace}>
              <DiceIconTwo />
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={rollDice}
        disabled={dice.isRolling}
        className={classes.rollButton}
      >
        Roll
      </Button>
      <Typography className={classes.totalScore}>
        Total Score: {dice.totalScore}
      </Typography>
    </Box>
  );
};

export default Dice;
