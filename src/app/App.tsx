import "./App.css";
import { Counter } from "../components/Counter";
import { Container } from "@mui/material";
import { selectCounter } from "../model/counter-selector";
import { useAppSelector } from "../common/hooks/useAppSelector";
import { selectCounterSetting } from "../model/counter-setting-selector";

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

  // useEffect(() => {
  //   const startValueAsString = localStorage.getItem("startKey");
  //   if (startValueAsString) {
  //     const newValue = JSON.parse(startValueAsString);
  //     setStartValue(newValue);
  //   }
  //   const maxValueAsString = localStorage.getItem("maxKey");
  //   if (maxValueAsString) {
  //     const newValue = JSON.parse(maxValueAsString);
  //     setMaxValue(newValue);
  //   }
  //   const startCounterValueAsString = localStorage.getItem("startCounterKey") as string;
  //   if (startValueAsString) {
  //     const newValue = JSON.parse(startCounterValueAsString);
  //     setStartCounterValue(newValue);
  //   }
  //   const maxCounterValueAsString = localStorage.getItem("maxCounterKey") as string;
  //   if (maxValueAsString) {
  //     const newValue = JSON.parse(maxCounterValueAsString);
  //     setMaxCounterValue(newValue);
  //   }
  //   const ValueAsString = localStorage.getItem("valueKey");
  //   if (ValueAsString) {
  //     const newValue = JSON.parse(ValueAsString);
  //     setCounterValue(newValue);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("startKey", JSON.stringify(startValue));
  //   localStorage.setItem("maxKey", JSON.stringify(maxValue));
  //   localStorage.setItem("startCounterKey", JSON.stringify(startCounterValue));
  //   localStorage.setItem("maxCounterKey", JSON.stringify(maxCounterValue));
  //   localStorage.setItem("valueKey", JSON.stringify(counterValue));
  // }, [counterValue, startValue, maxValue, startCounterValue, maxCounterValue]);

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

