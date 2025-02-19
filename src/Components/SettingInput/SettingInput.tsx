import { ChangeEvent } from "react";
import { S } from "./SettingInput_Styled";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonStyle, containerSSx, containerSx, counterCon } from "../Counter.styles";

type SetInputPropsType = {
  minCounterValue: number;
  startValue: number;
  maxValue: number;
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

  const setDisabled = startValue >= maxValue;

  return (
    <Grid container size={5} direction={"column"} justifyContent={"space-around"} sx={counterCon}>
      <Box sx={containerSx} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <S.Input>
          <S.Label>Max Value</S.Label>
          <S.InputNumber
            value={maxValue}
            onChange={maxValueHandler}
            min={minCounterValue}
            type={"number"}
            error={setDisabled}
          />
        </S.Input>
        {setDisabled && (
          <Typography variant="h6" component="h2" color="rgba(218, 29, 29,0.9)">
            Incorrect value!
          </Typography>
        )}
        <S.Input>
          <S.Label>Start Value</S.Label>
          <S.InputNumber
            value={startValue}
            onChange={startValueHandler}
            min={minCounterValue}
            type={"number"}
            error={setDisabled}
          />
        </S.Input>
      </Box>

      <Box sx={containerSSx}>
        <Button
          disabled={setDisabled}
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
