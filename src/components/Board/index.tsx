import { FC } from 'react'
import { ColumnsFieldType, HandleMakeMoveType, MoveProps } from '../../utils'
import { Column } from '../Column'
import { Dice } from '../Dice'
import { BoardWrapper, ColumnsFieldWrapper } from './styled'

interface BoardProps {
  mine?: boolean
  columns?: ColumnsFieldType
  handleMakeMove?: HandleMakeMoveType
  thrownDice?: number
  move: MoveProps
}

export const Board: FC<BoardProps> = ({
  mine,
  columns,
  handleMakeMove,
  thrownDice,
  move,
}) => {
  return (
    <BoardWrapper>
      {move.mine === !!mine && <Dice quantity={move.thrownDice} />}
      <ColumnsFieldWrapper>
        {columns?.map((column, i) => (
          <Column
            handleMakeMove={move.mine === !!mine ? handleMakeMove : undefined}
            key={i}
            numberOfColumn={i}
            column={column}
            mine={mine}
          />
        ))}
      </ColumnsFieldWrapper>
    </BoardWrapper>
  )
}
