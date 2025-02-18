import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { Container } from "@mui/material";

export const App = () => {
  const minCounterValue = 0;
  const startMaxCounterValue = 5;

  const [startCounterValue, setStartCounterValue] = useState<number>(minCounterValue);
  const [maxCounterValue, setMaxCounterValue] = useState<number>(startMaxCounterValue);
  const [counterValue, setCounterValue] = useState<number>(startCounterValue);

  return (
    <div className="app">
      <Container maxWidth={"lg"}>
        <Counter
          minCounterValue={minCounterValue}
          startCounterValue={startCounterValue}
          maxCounterValue={maxCounterValue}
          counterValue={counterValue}
          changeCounterValue={setCounterValue}
          setStartCounterValue={setStartCounterValue}
          setMaxCounterValue={setMaxCounterValue}
        />
      </Container>
    </div>
  );
};

