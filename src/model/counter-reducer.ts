import { createAction, createReducer } from "@reduxjs/toolkit";
import { CounterType } from "../app/App";
import { minCounterValue, startMaxCounterValue } from "../common/constants";

export const incrementAC = createAction('counter/increment')
export const resetCounterValueAC = createAction('counter/resetCounterValue')
export const changeCounterValueAC = createAction<number>('counter/changeCounterValue')
export const changeStartValueAC = createAction<number>('counter/changeStartValue')
export const changeMaxValueAC = createAction<number>('counter/changeMaxValue')

const initialState: CounterType = {
  counterValue: minCounterValue,
  startValue: minCounterValue,
  maxValue: startMaxCounterValue,
}

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementAC, (state) => {
      if(state.counterValue < state.maxValue) {
        state.counterValue++
      }
    })
    .addCase(resetCounterValueAC, (state) => {
      state.counterValue = state.startValue
    })
    .addCase(changeCounterValueAC, (state, action) => {
      state.counterValue = action.payload
    })
    .addCase(changeStartValueAC, (state, action) =>{
      state.startValue = action.payload
    })
    .addCase(changeMaxValueAC, (state, action) =>{
      state.maxValue = action.payload
    })
})