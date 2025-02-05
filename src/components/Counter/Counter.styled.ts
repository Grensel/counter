import styled from "styled-components";
import { font } from "../../styles/Common";
import { thems } from "../../styles/Thems";

const CounterBox = styled.div`
  background-color: ${thems.colors.background.primary};
  border: 2px solid ${thems.colors.background.second};
  border-radius: 10px;
  padding: 3ch 20px;
`;
const CounterValue = styled.span`
  ${font({
    color: `${thems.colors.text.title}`,
    weight: 800,
    Fmax: 80,
    Fmin: 60,
  })};
`;

export const S = {
  CounterBox,
  CounterValue,
};
