import { useState } from 'react'
import {
  ColumnsFieldType,
  ColumnType,
  generateRandomDice,
  MakeMoveHookReturnType,
} from '../utils'

const emptyCells = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const getEmptyIndex = (column: ColumnType, mine?: boolean) =>
  mine
    ? column.findIndex((cell) => !cell)
    : // @ts-ignore
      column.findLastIndex((cell) => !cell)

export const MakeMoveHook = (): MakeMoveHookReturnType => {
  const [myColumns, setMyColumns] = useState<ColumnsFieldType>(emptyCells)
  const [rivalColumns, setRivalColumns] = useState<ColumnsFieldType>(emptyCells)

  const [move, setMove] = useState({
    mine: Math.random() < 0.5,
    thrownDice: generateRandomDice(),
  })

  const getScore = (mine?: boolean) => {
    const columns = mine ? myColumns : rivalColumns
    return columns.reduce((acc, column) => {
      let multiplyBy = 1
      const numbersSet = new Set()
      const columnSum = column.reduce((partialSum, cell) => {
        if (!cell) return partialSum
        if (numbersSet.has(cell)) multiplyBy++
        else numbersSet.add(cell)

        return partialSum! + cell
      }, 0)
      return columnSum! * multiplyBy + acc
    }, 0)
  }

  const myScore = getScore(true)
  const rivalScore = getScore(false)

  const handleMakeMove = (
    mine: boolean,
    columnNumber: number,
    quantity: number = 5
  ) => {
    const mySetter = mine ? setMyColumns : setRivalColumns
    const rivalSetter = mine ? setRivalColumns : setMyColumns
    const myGetter = mine ? myColumns : rivalColumns
    const rivalGetter = mine ? rivalColumns : myColumns

    const indexOfEmpty = getEmptyIndex(myGetter[columnNumber], mine)
    if (
      indexOfEmpty === -1
      // || myGetter[columnNumber].length === 3 todo: need to improve
    )
      return

    setMove((prev) => ({ mine: !prev.mine, thrownDice: generateRandomDice() }))

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
    )

    if (!rivalGetter[columnNumber].find((cell) => cell === move.thrownDice))
      return
    rivalSetter((prev) =>
      prev.map((col, i) =>
        i !== columnNumber
          ? col
          : col.map((cell) => (cell === move.thrownDice ? null : cell))
      )
    )
  }
  return [handleMakeMove, myColumns, rivalColumns, myScore, rivalScore, move]
}
