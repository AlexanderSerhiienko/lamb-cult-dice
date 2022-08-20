import { FC } from 'react'
import { ColumnsFieldType, HandleMakeMoveType, MoveProps } from '../../utils'
import { Column } from '../Column'
import { Dice } from '../Dice'
import {
  BoardWrapper,
  ColumnsFieldWrapper,
  PlayerInfoWrapper,
  Score,
  ThrownDiceWrapper,
} from './styled'

interface BoardProps {
  mine?: boolean
  columns?: ColumnsFieldType
  handleMakeMove?: HandleMakeMoveType
  move: MoveProps
  score: number
}

export const Board: FC<BoardProps> = ({
  mine,
  columns,
  handleMakeMove,
  move,
  score,
}) => {
  return (
    <BoardWrapper>
      <PlayerInfoWrapper mine={mine}>
        <ThrownDiceWrapper>
          {move.mine === !!mine && <Dice quantity={move.thrownDice} />}
        </ThrownDiceWrapper>
        <Score>{score}</Score>
      </PlayerInfoWrapper>

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
