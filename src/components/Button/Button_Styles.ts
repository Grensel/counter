import styled from "styled-components";
import { thems } from "../../styles/Thems";
import { font } from "../../styles/Common";

const Button = styled.button`
  padding: 10px 30px;
  background-color: ${thems.colors.background.primary};
  border: 2px solid ${thems.colors.background.second};
  border-radius: 10px;
  transition: 0.5s;
  ${font({
    color: `${thems.colors.text.title}`,
    weight: 600,
    Fmax: 20,
    Fmin: 16,
  })};
  &:hover {
    background-color: ${thems.colors.background.second};
    transition: 0.5s;
  }
  &:disabled,
  :hover {
    cursor: default;
    background-color: ${thems.colors.background.disabled};
    border: 2px solid ${thems.colors.background.disabled};
    color: ${thems.colors.text.pseudo};
    transition: 0.5s;
  }
`;

export const S = {
  Button,
};
