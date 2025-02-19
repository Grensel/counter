import Button from "@mui/material/Button";
import { CounterSetting } from "./SettingInput/SettingInput";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import {
  buttonStyle,
  containerSSx,
  containerSx,
  counterCon,
  CounterDisplayValue,
} from "./Counter.styles";
export type CounterPropsType = {
  minCounterValue: number;
  startCounterValue: number;
  maxCounterValue: number;
  counterValue: number;
  startValue: number;
  maxValue: number;
  changeCounterValue: (value: number) => void;
  setStartCounterValue: (value: number) => void;
  setMaxCounterValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  setStartValue: (value: number) => void;
};
export const Counter = ({
  minCounterValue,
  startCounterValue,
  maxCounterValue,
  counterValue,
  startValue,
  maxValue,
  changeCounterValue,
  setStartCounterValue,
  setMaxCounterValue,
  setMaxValue,
  setStartValue,
}: CounterPropsType) => {
  const changeCounterValueHandler = () => {
    changeCounterValue(counterValue < maxCounterValue ? counterValue + 1 : counterValue);
  };

  const resetCounterValueHandler = () => {
    changeCounterValue(startCounterValue);
  };

  const incDisabled = counterValue === maxCounterValue;
  const resetDisabled = counterValue === startCounterValue;

  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"} sx={{ height: "100vh" }}>
      <CounterSetting
        minCounterValue={minCounterValue}
        startValue={startValue}
        maxValue={maxValue}
        setMaxValueHandler={setMaxCounterValue}
        setStartValueHandler={setStartCounterValue}
        changeCounterValue={changeCounterValue}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
      />
      <Grid container size={5} direction={"column"} justifyContent={"space-around"} sx={counterCon}>
        <Box sx={containerSSx}>
          <Typography variant="h1" component="h2" sx={CounterDisplayValue(incDisabled)}>
            {counterValue}
          </Typography>
        </Box>

        <Box sx={containerSx}>
          <Button
            disabled={incDisabled}
            size={"large"}
            variant={"outlined"}
            color="primary"
            onClick={changeCounterValueHandler}
            sx={buttonStyle}
          >
            inc
          </Button>
          <Button
            disabled={resetDisabled}
            size={"large"}
            variant={"outlined"}
            color="primary"
            onClick={resetCounterValueHandler}
            sx={buttonStyle}
          >
            reset
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
