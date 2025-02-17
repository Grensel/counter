import Button from "@mui/material/Button";
import { SettingInput } from "./SettingInput/SettingInput";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { containerSSx, containerSx, counterCon } from "./Counter.styles";
export type CounterPropsType = {
  minCounterValue: number;
  startCounterValue: number;
  maxCounterValue: number;
  counterValue: number;
  changeCounterValue: (value: number) => void;
  setStartCounterValue: (value: number) => void;
  setMaxCounterValue: (value: number) => void;
};
export const Counter = ({
  minCounterValue,
  startCounterValue,
  maxCounterValue,
  counterValue,
  changeCounterValue,
  setStartCounterValue,
  setMaxCounterValue,
}: CounterPropsType) => {
  const changeCounterValueHandler = () => {
    changeCounterValue(counterValue < maxCounterValue ? counterValue + 1 : counterValue);
  };

  const resetCounterValueHandler = () => {
    changeCounterValue(startCounterValue);
  };
  let startValue: number;
  const setStartValueHandler = (value: number) => (startValue = value);

  let maxValue: number;
  const setMaxValueHandler = (value: number) => (maxValue = value);

  const onClickHandler = () => {
    setStartCounterValue(startValue);
    changeCounterValue(startValue);
    setMaxCounterValue(maxValue);
  };

  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"} sx={{ height: "100vh" }}>
      <Grid container size={5} direction={"column"} justifyContent={"space-around"} sx={counterCon}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={containerSx} display={"flex"} flexDirection={"column"} gap={"20px"}>
            <SettingInput
              minCounterValue={minCounterValue}
              startValue={startCounterValue}
              setValueHandler={setStartValueHandler}
            />
            <SettingInput
              minCounterValue={minCounterValue}
              startValue={maxCounterValue}
              setValueHandler={setMaxValueHandler}
            />
          </Box>
          <Box sx={containerSSx}>
            <Button size={"large"} variant={"outlined"} color="primary" onClick={onClickHandler}>
              set
            </Button>
          </Box>
        </Paper>
      </Grid>

      <Grid container size={5} direction={"column"} justifyContent={"space-around"} sx={counterCon}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={containerSSx}>
            <Typography variant="h1" component="h2">
              {counterValue}
            </Typography>
          </Box>

          <Box sx={containerSx}>
            <Button
              size={"large"}
              variant={"outlined"}
              color="primary"
              onClick={changeCounterValueHandler}
            >
              inc
            </Button>
            <Button
              size={"large"}
              variant={"outlined"}
              color="primary"
              onClick={resetCounterValueHandler}
            >
              reset
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
