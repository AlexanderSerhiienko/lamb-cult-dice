import { FC } from "react";
import { DiceWrapper, Dot } from "./styled";

interface DiceProps {
  quantity: number;
  highlighted?: boolean;
}

export const Dice: FC<DiceProps> = ({ quantity, highlighted }) => {
  return (
    <DiceWrapper highlighted={highlighted} quantity={quantity}>
      {[...Array(quantity)].map((_, i) => (
        <Dot key={i} />
      ))}
    </DiceWrapper>
  );
};
