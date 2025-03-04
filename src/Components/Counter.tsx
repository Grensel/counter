import Button from "@mui/material/Button";
import { CounterSetting } from "./settingInput/SettingInput";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import {
  buttonStyle,
  containerCounterBar,
  containerForTwoEl,
  counterCon,
  CounterDisplayValue,
} from "./Counter.styles";
import { CounterType, CounterSettingsType } from "../app/App";
import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { incrementAC, resetCounterValueAC } from "../model/counter-reducer";

export type CounterPropsType = {
  counter: CounterType
  setting: CounterSettingsType
};
export const Counter = ({
  counter,
  setting,
}: CounterPropsType) => {

  const dispatch = useAppDispatch()

  const changeCounterValueHandler = () => {
    dispatch(incrementAC());
  };

  const resetCounterValueHandler = () => {
    dispatch(resetCounterValueAC());
  };

  const incDisabled = counter.counterValue === counter.maxValue;
  const resetDisabled = counter.counterValue === counter.startValue;
  const setingDisabled = setting.startValue >= setting.maxValue;

  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"} sx={{ height: "100vh" }}>
      <CounterSetting
        setingDisabled={setingDisabled}
        setting={setting}
      />
      <Grid container size={5} direction={"column"} justifyContent={"space-around"} sx={counterCon}>
        <Box sx={containerCounterBar}>
          {setingDisabled ? (
            <Typography variant="h3" component="h2" color="rgba(218, 29, 29,0.9)">
              Incorrect value!
            </Typography>
          ) : (
            <Typography variant="h1" component="h2" sx={CounterDisplayValue(incDisabled)}>
              {counter.counterValue}
            </Typography>
          )}
        </Box>

        <Box sx={containerForTwoEl}>
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
