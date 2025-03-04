import { ChangeEvent } from "react";
import { S } from "./SettingInput_Styled";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonStyle, containerForOneElSx, containerForTwoEl, counterCon } from "../Counter.styles";
import { CounterSettingsType } from "../../app/App";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { changeSettingsMaxValueAC, changeSettingsStartValueAC } from "../../model/counter-setting-reducer";
import { changeCounterValueAC, changeMaxValueAC, changeStartValueAC } from "../../model/counter-reducer";
import { minCounterValue } from "../../common/constants";

type SetInputPropsType = {
  setingDisabled: boolean
  setting: CounterSettingsType
};

export const CounterSetting = ({
  setingDisabled,
  setting,
}: SetInputPropsType) => {
  const dispatch = useAppDispatch()

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSettingsMaxValueAC(+e.currentTarget.value));
  };
  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSettingsStartValueAC(+e.currentTarget.value));
  };

  const onClickHandler = () => {
    console.log('set');

    dispatch(changeCounterValueAC(setting.startValue));
    dispatch(changeStartValueAC(setting.startValue));
    dispatch(changeMaxValueAC(setting.maxValue));
  };

  return (
    <Grid container size={5} direction={"column"} justifyContent={"space-around"} sx={counterCon}>
      <Box sx={containerForTwoEl} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <S.Input>
          <S.Label {...(setingDisabled ? { error: true } : {})} >Max Value</S.Label>
          <S.InputNumber
            value={setting.maxValue}
            onChange={maxValueHandler}
            min={minCounterValue}
            type={"number"}
            {...(setingDisabled ? { error: true } : {})}
          />
        </S.Input>
        <S.Input>
          <S.Label error={setingDisabled}>Start Value</S.Label>
          <S.InputNumber
            value={setting.startValue}
            onChange={startValueHandler}
            min={minCounterValue}
            type={"number"}
            {...(setingDisabled ? { error: true } : {})}
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
