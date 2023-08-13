export type HandleMakeMoveType = (mine: boolean, columnNumber: number) => void;

export interface MoveProps {
  isMyTurn: boolean;
  thrownDice: number;
}

export type MakeMoveReturnType = [
  HandleMakeMoveType,
  number[][],
  number[][],
  number,
  number,
  MoveProps
];
