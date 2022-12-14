import { FC } from 'react'
import { ColumnType, HandleMakeMoveType } from '../../utils'
import { Dice } from '../Dice'
import { Cell, ColumnWrapper } from './styled'

interface ColumnProps {
  column: ColumnType
  mine?: boolean
  numberOfColumn: number
  handleMakeMove?: HandleMakeMoveType
}

export const Column: FC<ColumnProps> = ({
  column,
  mine,
  numberOfColumn,
  handleMakeMove,
}) => {
  return (
    <ColumnWrapper
      mine={mine}
      onClick={() =>
        handleMakeMove && handleMakeMove(!!mine, numberOfColumn, 5)
      }
    >
      {column.map((cell, i) => (
        <Cell key={i}>{cell && <Dice quantity={cell} />}</Cell>
      ))}
    </ColumnWrapper>
  )
}
