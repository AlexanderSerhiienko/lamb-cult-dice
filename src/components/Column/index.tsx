import { FC, useMemo } from "react";
import { getMostCommonValue, HandleMakeMoveType } from "../../utils";
import { Dice } from "../Dice";
import { Cell, ColumnWrapper } from "./styled";

interface ColumnProps {
  column: number[];
  mine?: boolean;
  numberOfColumn: number;
  handleMakeMove: HandleMakeMoveType;
}

export const Column: FC<ColumnProps> = ({
  column,
  mine,
  numberOfColumn,
  handleMakeMove,
}) => {
  const mostCommon = useMemo(() => getMostCommonValue([...column]), [column]);

  // it checks if we have ore then one dice with the same value to highlight it
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
