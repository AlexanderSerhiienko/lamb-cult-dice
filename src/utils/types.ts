export type ColumnType = (number | null)[]

export type ColumnsFieldType = ColumnType[]

export type HandleMakeMoveType = (
  mine: boolean,
  columnNumber: number,
  quantity: number
) => void

export interface MoveProps {
  mine: boolean
  thrownDice: number
}

export type MakeMoveHookReturnType = [
  HandleMakeMoveType,
  ColumnsFieldType,
  ColumnsFieldType,
  number,
  number,
  MoveProps
]
