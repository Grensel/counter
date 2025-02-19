import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { Container } from "@mui/material";

const minCounterValue = 0;
const startMaxCounterValue = 5;

export const App = () => {
  const [startCounterValue, setStartCounterValue] = useState(minCounterValue);
  const [maxCounterValue, setMaxCounterValue] = useState(startMaxCounterValue);
  const [counterValue, setCounterValue] = useState(startCounterValue);
  const [startValue, setStartValue] = useState(minCounterValue);
  const [maxValue, setMaxValue] = useState(maxCounterValue);

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

