import "./App.css";
import { useState } from "react";
import { Container } from "./components/Styled/Container";
import { FlexWrapper } from "./components/Styled/FlexWrapper";
import { Counter, CounterValue } from "./components/Counter/Counter";

export const App = () => {
  const mainTitle = "My Counter";
  const minValue = 0;
  const startMaxValue = 5;
  const [startValue, setStartValue] = useState<CounterValue>(minValue);
  const [maxValue, setMaxValue] = useState<CounterValue>(startMaxValue);
  const [counterValue, setCounterValue] = useState<CounterValue>(minValue);

  return (
    <div className="App">
      <Container>
        <FlexWrapper direction="column" gap={10} align="center">
          <h1>{mainTitle}</h1>
          <Counter
            value={counterValue}
            maxCounterValue={maxValue}
            startCounterValue={startValue}
            changeCounterValue={setCounterValue}
            changeStartValue={setStartValue}
            changeMaxValue={setMaxValue}
          />
        </FlexWrapper>
      </Container>
    </div>
  );
};

