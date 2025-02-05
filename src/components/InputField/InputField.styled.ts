import styled from "styled-components";
import { thems } from "../../styles/Thems";
import { font } from "../../styles/Common";

const Input = styled.input`
  text-align: center;
  padding: 5px 10px;
  width: 50%;
  background-color: ${thems.colors.background.primary};
  border: 2px solid ${thems.colors.background.second};
  border-radius: 5px;
  ${font({})}
  &:hover {
    background-color: ${thems.colors.background.second};
  }
`;

export const S = {
  Input,
};
