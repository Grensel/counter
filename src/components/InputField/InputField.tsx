import { ChangeEvent } from "react";
import { FlexWrapper } from "../Styled/FlexWrapper";
import { S } from "./InputField.styled";

type SettingsInputPropsType = {
  title: string;
  value: number;
  onChange: (value: number) => void;
};

export const SettingsInput = ({ title, value, onChange }: SettingsInputPropsType) => {
  const onChangeHendler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    onChange(+event.currentTarget.value);
  };

  return (
    <FlexWrapper justify="space-between">
      <label>{title}:</label>
      <S.Input type={"number"} value={value} onChange={onChangeHendler}></S.Input>
    </FlexWrapper>
  );
};
