import "./App.css";
import { Counter } from "../components/Counter";
import { Container } from "@mui/material";
import { selectCounter } from "../model/counter-selector";
import { useAppSelector } from "../common/hooks/useAppSelector";
import { selectCounterSetting } from "../model/counter-setting-selector";
import { useEffect } from "react";
import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { changeCounterValueAC, changeMaxValueAC, changeStartValueAC } from "../model/counter-reducer";
import { changeSettingsMaxValueAC, changeSettingsStartValueAC } from "../model/counter-setting-reducer";

export type CounterType = {
  counterValue: number
  startValue: number
  maxValue: number
}
export type CounterSettingsType = {
  startValue: number
  maxValue: number
}

export const App = () => {
  const counter = useAppSelector(selectCounter)
  const setting = useAppSelector(selectCounterSetting)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const ValueAsString = localStorage.getItem("valueKey");
    if (ValueAsString) {
      const newValue = JSON.parse(ValueAsString);
      dispatch(changeCounterValueAC(newValue));
    }
    const startValueAsString = localStorage.getItem("startKey");
    if (startValueAsString) {
      const newValue = JSON.parse(startValueAsString);
      dispatch(changeStartValueAC(newValue));
    }
    const maxValueAsString = localStorage.getItem("maxKey");
    if (maxValueAsString) {
      const newValue = JSON.parse(maxValueAsString);
      dispatch(changeMaxValueAC(newValue));
    }
    const startCounterValueAsString = localStorage.getItem("startSettingKey") as string;
    if (startValueAsString) {
      const newValue = JSON.parse(startCounterValueAsString);
      dispatch(changeSettingsStartValueAC(newValue));
    }
    const maxCounterValueAsString = localStorage.getItem("maxSettingKey") as string;
    if (maxValueAsString) {
      const newValue = JSON.parse(maxCounterValueAsString);
      dispatch(changeSettingsMaxValueAC(newValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("valueKey", JSON.stringify(counter.counterValue));
    localStorage.setItem("startKey", JSON.stringify(counter.startValue));
    localStorage.setItem("maxKey", JSON.stringify(counter.maxValue));
    localStorage.setItem("startSettingKey", JSON.stringify(setting.startValue));
    localStorage.setItem("maxSettingKey", JSON.stringify(setting.maxValue));
  }, [counter.counterValue, counter.startValue, counter.maxValue, setting.startValue, setting.maxValue]);

  return (
    <div className="app">
      <Container maxWidth={"lg"}>
        <Counter
          counter={counter}
          setting={setting}
        />
      </Container>
    </div>
  );
};

