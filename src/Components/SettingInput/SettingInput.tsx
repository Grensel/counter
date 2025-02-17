import { ChangeEvent, useState } from "react";

type SetInputPropsType = {
  startValue: number;
  minCounterValue: number;
  setValueHandler: (value: number) => void;
};

export const SettingInput = ({
  minCounterValue,
  startValue,
  setValueHandler,
}: SetInputPropsType) => {
  const [value, setValue] = useState(startValue);
  const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value);
  };
  setValueHandler(value);

  return <input value={value} onChange={valueHandler} min={minCounterValue} type={"number"} />;
};
