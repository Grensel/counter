import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { counterReducer } from '../model/counter-reducer'
import { counterSettingReducer } from '../model/counter-setting-reducer';

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
  counter: counterReducer,
  setting: counterSettingReducer,
})

// создание store
export const store = configureStore({
  reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store