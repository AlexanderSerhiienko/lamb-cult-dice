import { useState } from "react";
import {
  ColumnsFieldType,
  ColumnType,
  generateRandomDice,
  MakeMoveReturnType,
} from "../utils";

const emptyCells = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// if it is our turn, we put dice on the top of the column
// while on opponent board, it should be bottom of the column
const getEmptyIndexOfColumn = (column: ColumnType, isMyTurn?: boolean) =>
  isMyTurn
    ? column.findIndex((cell) => !cell)
    : // @ts-ignore
      column.findLastIndex((cell) => !cell);

export const useMakeMove = (): MakeMoveReturnType => {
  const myColumnsState = useState<ColumnsFieldType>(emptyCells);
  const rivalColumnsState = useState<ColumnsFieldType>(emptyCells);

  const [move, setMove] = useState({
    isMyTurn: Math.random() < 0.5,
    thrownDice: generateRandomDice(),
  });

  const getScore = (mine?: boolean) => {
    const state = mine ? myColumnsState : rivalColumnsState;
    const columns = state[0];

    return columns.reduce((acc, column) => {
      // multiplyBy is used to multiply the score if there are duplicates of dices
      let multiplyBy = 1;
      const numbersSet = new Set();
      const columnSum = column.reduce((partialSum, cell) => {
        if (!cell) return partialSum;
        if (numbersSet.has(cell)) multiplyBy++;
        else numbersSet.add(cell);
        return partialSum + cell;
      }, 0);
      return columnSum * multiplyBy + acc;
    }, 0);
  };

  const myScore = getScore(true);
  const rivalScore = getScore(false);

  const handleMakeMove = (isMyTurn: boolean, columnNumber: number) => {
    // don't want to allow to make move if it's not our turn
    if (move.isMyTurn !== !!isMyTurn) return;

    // extract the state and setter for the current player and the opponent
    const [myGetter, mySetter] = isMyTurn ? myColumnsState : rivalColumnsState;
    const [rivalGetter, rivalSetter] = isMyTurn
      ? rivalColumnsState
      : myColumnsState;

    const indexOfEmpty = getEmptyIndexOfColumn(
      myGetter[columnNumber],
      isMyTurn
    );
    // if there is no empty cell, then game is over and the winner is the one with higher score
    if (indexOfEmpty === -1) return;

    // we put dice in the nearest top index of the column
    mySetter((prev) =>
      prev.map((col, i) =>
        i !== columnNumber
          ? col
          : [
              ...col.slice(0, indexOfEmpty),
              move.thrownDice,
              ...col.slice(indexOfEmpty + 1),
            ]
      )
    );

    // if there is same dice on parallel opponent column, we remove it
    if (rivalGetter[columnNumber].find((cell) => cell === move.thrownDice))
      rivalSetter((prev) =>
        prev.map((col, i) =>
          i !== columnNumber
            ? col
            : col.map((cell) => (cell === move.thrownDice ? 0 : cell))
        )
      );

    // in the end of turn, we generate new dice and change the turn
    setMove((prev) => ({
      isMyTurn: !prev.isMyTurn,
      thrownDice: generateRandomDice(),
    }));
  };
  return [
    handleMakeMove,
    myColumnsState[0],
    rivalColumnsState[0],
    myScore,
    rivalScore,
    move,
  ];
};
