import { FC } from 'react'
import { DiceWrapper, Dot } from './styled'

interface DiceProps {
  quantity: number
}

export const Dice: FC<DiceProps> = ({ quantity }) => {
  return (
    <DiceWrapper quantity={quantity}>
      {[...Array(quantity)].map((_, i) => (
        <Dot key={i} />
      ))}
    </DiceWrapper>
  )
}
