import { FC } from 'react'
import { MakeMoveHook } from '../../hooks/MakeMoveHook'
import { Board } from '../Board'
import { PlaygroundWrapper } from './style'

export const Playground: FC = () => {
  const [handleMakeMove, myColumns, rivalColumns, myScore, rivalScore, move] =
    MakeMoveHook()

  return (
    <PlaygroundWrapper>
      <div>My score: {myScore}</div>
      <div>Rival score: {rivalScore}</div>
      <Board
        handleMakeMove={handleMakeMove}
        columns={rivalColumns}
        move={move}
      />
      <Board
        handleMakeMove={handleMakeMove}
        mine
        columns={myColumns}
        move={move}
      />
    </PlaygroundWrapper>
  )
}
