import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { Container, createTheme, CssBaseline, Switch, ThemeProvider } from "@mui/material";

export const App = () => {
  const minCounterValue = 0;
  const startMaxCounterValue = 5;

  const [startCounterValue, setStartCounterValue] = useState<number>(minCounterValue);
  const [maxCounterValue, setMaxCounterValue] = useState<number>(startMaxCounterValue);
  const [counterValue, setCounterValue] = useState<number>(startCounterValue);

  const [isDrarkMode, setIsDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#087EA4",
      },
      mode: isDrarkMode ? "dark" : "light",
    },
  });

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={"lg"}>
          <Switch checked={isDrarkMode} onChange={() => setIsDarkMode(!isDrarkMode)} />
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
      </ThemeProvider>
    </div>
  );
};

