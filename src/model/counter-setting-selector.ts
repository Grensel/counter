import { CounterSettingsType } from "../app/App";
import { RootState } from "../app/store";

export const selectCounterSetting = (state: RootState): CounterSettingsType => state.setting