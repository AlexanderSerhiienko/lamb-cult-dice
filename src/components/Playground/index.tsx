import { FC } from "react";
import { useMakeMove } from "../../hooks";
import { Board } from "../Board";
import { PlaygroundWrapper } from "./style";

export const Playground: FC = () => {
  const [handleMakeMove, myColumns, rivalColumns, myScore, rivalScore, move] =
    useMakeMove();

  return (
    <PlaygroundWrapper>
      <Board
        handleMakeMove={handleMakeMove}
        columns={rivalColumns}
        move={move}
        score={rivalScore}
      />
      <Board
        handleMakeMove={handleMakeMove}
        mine
        columns={myColumns}
        move={move}
        score={myScore}
      />
    </PlaygroundWrapper>
  );
};
