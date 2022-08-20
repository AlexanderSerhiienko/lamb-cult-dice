import styled, { css } from 'styled-components'

export const ColumnsFieldWrapper = styled.div`
  display: flex;
  width: 330px;
  height: 330px;
  background: #9e8a71;
  justify-content: space-between;
  border-radius: 8px;
`
export const BoardWrapper = styled.div`
  display: flex;
`

export const ThrownDiceWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191911;
  border-radius: 8px;
`

export const PlayerInfoWrapper = styled.div<{ mine?: boolean }>`
  display: flex;
  width: 300px;
  position: absolute;
  background: black;
  padding: 16px;
  border-radius: 12px;
  flex-direction: ${({ mine }) => (mine ? 'row' : 'row-reverse')};
  ${(props) =>
    props.mine
      ? css`
          bottom: 10px;
          left: 10px;
        `
      : css`
          top: 10px;
          right: 10px;
        `}
`

export const Score = styled.span`
  font-size: 60px;
  color: white;
  font-weight: bold;
  margin: auto;
`
