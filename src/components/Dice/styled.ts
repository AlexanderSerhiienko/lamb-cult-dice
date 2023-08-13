import styled, { css } from "styled-components";

const getDiceStyle = (quantity: number) => {
  switch (quantity) {
    case 1:
      return `
            align-items: center;
            justify-content: center;
            `;
    case 2:
      return `
            justify-content: space-between;
            div:last-child {
                align-self: flex-end;
            }
            `;
    case 3:
      return `
            column-gap: 0;
            justify-content: space-between;
           div:nth-child(2) {
                align-self: center;
           }
           div:last-child {
                align-self: flex-end;
            }
            `;
    case 4:
      return `
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            `;
    case 5:
      return `
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            div:last-child {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            `;
    case 6:
      return `
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            row-gap: 6px;
            `;
  }
};

export const DiceWrapper = styled.div<{
  quantity: number;
  highlighted?: boolean;
}>`
  background: white;
  border: 2px solid black;
  height: 75px;
  width: 75px;
  gap: 19px;
  display: flex;
  padding: 16px;
  position: relative;
  border-radius: 16px;
  aspect-ratio: 1/1;
  ${({ quantity }) => getDiceStyle(quantity)}
  ${({ highlighted }) =>
    highlighted &&
    css`
      background: cyan;
    `}
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: black;
  aspect-ratio: 1/1;
`;
