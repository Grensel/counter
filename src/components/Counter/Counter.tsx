import { Button } from "../Button/Button";
import { SettingsInput } from "../InputField/InputField";
import { CountersBoxes } from "../Styled/CountersBoxes";
import { FlexWrapper } from "../Styled/FlexWrapper";
import { S } from "./Counter.styled";
import { CounterBar } from "./CounterBar/CounterBar";

export type CounterValue = number;
type CounterPropsType = {
  value: CounterValue;
  maxCounterValue: number;
  startCounterValue: number;
  changeCounterValue: (n: number) => void;
  changeStartValue: (value: number) => void;
  changeMaxValue: (value: number) => void;
};

export const Counter = ({
  value,
  startCounterValue,
  maxCounterValue,
  changeCounterValue,
  changeStartValue,
  changeMaxValue,
}: CounterPropsType) => {
  const setMaxValueHandler = (maxValue: number) => {
    changeMaxValue(maxValue);
  };
  const setStartValueHandler = (startValue: number) => {
    changeStartValue(startValue);
  };
  const setValues = () => {
    resetCounterValue();
  };

  const addCounterValue = () => {
    changeCounterValue(value < maxCounterValue ? ++value : value);
  };
  const resetCounterValue = () => {
    changeCounterValue(startCounterValue);
  };

  const buttonResetDisabled = value <= startCounterValue;
  const addButtonDisabled = value >= maxCounterValue;

  return (
    <FlexWrapper gap={40}>
      <CountersBoxes title={"Settings"}>
        <S.CounterBox>
          <FlexWrapper direction="column" gap={20}>
            <SettingsInput
              title={"max value"}
              value={maxCounterValue}
              onChange={setMaxValueHandler}
            />
            <SettingsInput
              title={"start value"}
              value={startCounterValue}
              onChange={setStartValueHandler}
            />
          </FlexWrapper>
        </S.CounterBox>
        <S.CounterBox>
          <Button disabled={addButtonDisabled} title={"set"} onClickHandler={setValues} />
        </S.CounterBox>
      </CountersBoxes>
      <CountersBoxes title={"Counter"}>
        <CounterBar value={value} className={addButtonDisabled ? "redLimit" : "normal"} />
        <S.CounterBox>
          <FlexWrapper justify={"space-around"}>
            <Button disabled={addButtonDisabled} title={"inc"} onClickHandler={addCounterValue} />
            <Button
              disabled={buttonResetDisabled}
              title={"reset"}
              onClickHandler={resetCounterValue}
            />
          </FlexWrapper>
        </S.CounterBox>
      </CountersBoxes>
    </FlexWrapper>
  );
};
