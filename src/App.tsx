import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { Container } from "@mui/material";

const minCounterValue = 0;
const startMaxCounterValue = 5;

export const App = () => {
  const [startValue, setStartValue] = useState(minCounterValue);
  const [maxValue, setMaxValue] = useState(startMaxCounterValue);
  const [startCounterValue, setStartCounterValue] = useState(startValue);
  const [maxCounterValue, setMaxCounterValue] = useState(maxValue);
  const [counterValue, setCounterValue] = useState(startCounterValue);

  useEffect(() => {
    const startValueAsString = localStorage.getItem("startKey");
    if (startValueAsString) {
      const newValue = JSON.parse(startValueAsString);
      setStartValue(newValue);
    }
    const maxValueAsString = localStorage.getItem("maxKey");
    if (maxValueAsString) {
      const newValue = JSON.parse(maxValueAsString);
      setMaxValue(newValue);
    }
    const startCounterValueAsString = localStorage.getItem("startCounterKey") as string;
    if (startValueAsString) {
      const newValue = JSON.parse(startCounterValueAsString);
      setStartCounterValue(newValue);
    }
    const maxCounterValueAsString = localStorage.getItem("maxCounterKey") as string;
    if (maxValueAsString) {
      const newValue = JSON.parse(maxCounterValueAsString);
      setMaxCounterValue(newValue);
    }
    const ValueAsString = localStorage.getItem("valueKey");
    if (ValueAsString) {
      const newValue = JSON.parse(ValueAsString);
      setCounterValue(newValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("startKey", JSON.stringify(startValue));
    localStorage.setItem("maxKey", JSON.stringify(maxValue));
    localStorage.setItem("startCounterKey", JSON.stringify(startCounterValue));
    localStorage.setItem("maxCounterKey", JSON.stringify(maxCounterValue));
    localStorage.setItem("valueKey", JSON.stringify(counterValue));
  }, [counterValue, startValue, maxValue, startCounterValue, maxCounterValue]);

  return (
    <div className="app">
      <Container maxWidth={"lg"}>
        <Counter
          minCounterValue={minCounterValue}
          startCounterValue={startCounterValue}
          maxCounterValue={maxCounterValue}
          counterValue={counterValue}
          startValue={startValue}
          maxValue={maxValue}
          changeCounterValue={setCounterValue}
          setStartCounterValue={setStartCounterValue}
          setMaxCounterValue={setMaxCounterValue}
          setMaxValue={setMaxValue}
          setStartValue={setStartValue}
        />
      </Container>
    </div>
  );
};

