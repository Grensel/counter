import { ChangeEvent } from "react";
import { S } from "./SettingInput_Styled";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonStyle, containerForOneElSx, containerForTwoEl, counterCon } from "../Counter.styles";

type SetInputPropsType = {
  minCounterValue: number;
  startValue: number;
  maxValue: number;
  setingDisabled: boolean;
  setMaxValueHandler: (value: number) => void;
  setStartValueHandler: (value: number) => void;
  changeCounterValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  setStartValue: (value: number) => void;
};

export const CounterSetting = ({
  minCounterValue,
  startValue,
  maxValue,
  setingDisabled,
  setMaxValueHandler,
  setStartValueHandler,
  changeCounterValue,
  setMaxValue,
  setStartValue,
}: SetInputPropsType) => {
  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
  };
  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value);
  };

  const onClickHandler = () => {
    setStartValueHandler(startValue);
    changeCounterValue(startValue);
    setMaxValueHandler(maxValue);
  };

  return (
    <Grid container size={5} direction={"column"} justifyContent={"space-around"} sx={counterCon}>
      <Box sx={containerForTwoEl} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <S.Input>
          <S.Label error={setingDisabled}>Max Value</S.Label>
          <S.InputNumber
            value={maxValue}
            onChange={maxValueHandler}
            min={minCounterValue}
            type={"number"}
            error={setingDisabled}
          />
        </S.Input>
        <S.Input>
          <S.Label error={setingDisabled}>Start Value</S.Label>
          <S.InputNumber
            value={startValue}
            onChange={startValueHandler}
            min={minCounterValue}
            type={"number"}
            error={setingDisabled}
          />
        </S.Input>
      </Box>

      <Box sx={containerForOneElSx}>
        <Button
          disabled={setingDisabled}
          size={"large"}
          variant={"outlined"}
          color="primary"
          onClick={onClickHandler}
          sx={buttonStyle}
        >
          set
        </Button>
      </Box>
    </Grid>
  );
};
