export type ColumnType = number[];

export type ColumnsFieldType = ColumnType[];

export type HandleMakeMoveType = (mine: boolean, columnNumber: number) => void;

export interface MoveProps {
  isMyTurn: boolean;
  thrownDice: number;
}

export type MakeMoveReturnType = [
  HandleMakeMoveType,
  ColumnsFieldType,
  ColumnsFieldType,
  number,
  number,
  MoveProps
];
