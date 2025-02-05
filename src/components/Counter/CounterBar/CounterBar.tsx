import { S } from "../Counter.styled";

type ScoreBoardPropsType = {
  value: number;
  className: string;
};
export const CounterBar = ({ value, className }: ScoreBoardPropsType) => {
  return (
    <S.CounterBox>
      <h3 className={className}>{value}</h3>
      {/* <S.CounterValue className={className}>{value}</S.CounterValue> */}
    </S.CounterBox>
  );
};
