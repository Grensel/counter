import { createAction, createReducer } from "@reduxjs/toolkit";
import { CounterSettingsType } from "../app/App";
import { minCounterValue, startMaxCounterValue } from "../common/constants";

export const changeSettingsStartValueAC = createAction<number>('setting/changeSettingsStartValue')
export const changeSettingsMaxValueAC = createAction<number>('setting/changeSettingsMaxValue')

const initialState: CounterSettingsType = {
  startValue: minCounterValue,
  maxValue: startMaxCounterValue,
}
export const counterSettingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSettingsStartValueAC, (state, action) =>{
      state.startValue = action.payload
    })
    .addCase(changeSettingsMaxValueAC, (state, action) =>{
      state.maxValue = action.payload
    })
})