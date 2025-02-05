import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  self?: string;
  wrap?: string;
  gap?: number;
  margin?: string;
  height?: string;
  grow?: number;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  align-self: ${props => props.self};
  gap: ${props => props.gap}px;
  flex-grow: ${props => props.grow};

  height: ${props => props.height || "100%"};
`;
