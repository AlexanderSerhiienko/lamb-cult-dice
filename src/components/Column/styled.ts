import styled, { css } from 'styled-components'

export const ColumnWrapper = styled.div<{ mine?: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 5px solid transparent;
  transition: 0.3s;
  border-radius: 8px;
  ${({ mine }) =>
    mine &&
    css`
      &:hover {
        border: 5px solid red;
        background: red;
      }
    `}
`

export const Cell = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191911;
  border-radius: 12px;
`
