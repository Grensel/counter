import { HtmlHTMLAttributes } from "react";
import { S } from "../Counter/Counter.styled";
import { FlexWrapper } from "./FlexWrapper";
import { Title } from "./SectionTitle";

type Props = {
  title: string;
};

type CounterBoxesPropsType = HtmlHTMLAttributes<HTMLDivElement> & Props;
export const CountersBoxes = ({ title, children }: CounterBoxesPropsType) => {
  return (
    <div style={{ width: "100%", minWidth: "400px" }}>
      <Title>{title}</Title>
      <S.CounterBox>
        <FlexWrapper direction="column" gap={20}>
          {children}
        </FlexWrapper>
      </S.CounterBox>
    </div>
  );
};
