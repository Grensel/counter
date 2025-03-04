import { CounterType } from "../app/App";
import { RootState } from "../app/store";

export const selectCounter = (state: RootState): CounterType => state.counter