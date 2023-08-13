import { FC, useMemo } from "react";
import { HandleMakeMoveType } from "../../utils";
import { Dice } from "../Dice";
import { Cell, ColumnWrapper } from "./styled";

interface ColumnProps {
  column: number[];
  mine?: boolean;
  numberOfColumn: number;
  handleMakeMove: HandleMakeMoveType;
}

function getMostCommon(arr: number[]) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

export const Column: FC<ColumnProps> = ({
  column,
  mine,
  numberOfColumn,
  handleMakeMove,
}) => {
  
  const mostCommon = useMemo(() => getMostCommon([...column]), [column]);

  const shouldHighlightMostCommon = useMemo(
    () => column.filter((v) => v === mostCommon).length > 1,
    [mostCommon]
  );

  return (
    <ColumnWrapper onClick={() => handleMakeMove(!!mine, numberOfColumn)}>
      {column.map((dice, i) => (
        <Cell key={i}>
          {!!dice && (
            <Dice
              highlighted={shouldHighlightMostCommon && dice === mostCommon}
              quantity={dice}
            />
          )}
        </Cell>
      ))}
    </ColumnWrapper>
  );
};
