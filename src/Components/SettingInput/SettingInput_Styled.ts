import styled from "styled-components";
const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const InputNumber = styled.input<{ error: boolean }>`
  padding: 15px 25px 10px;
  border: ${props =>
    props.error ? "1px solid rgba(201, 25, 25, 0.22)" : "1px solid rgba(1, 74, 158, 0.98)"};
  box-shadow: 0px 0px 10px 10px rgba(1, 74, 158, 0.2);
  box-shadow: ${props =>
    props.error
      ? "0px 0px 10px 5px rgba(201, 25, 25,0.2)"
      : "0px 0px 10px 10px rgba(1, 74, 158, 0.2)"};
  background-color: transparent;
  outline: none;
  border-radius: 3px;
  height: 30px;
  font-size: 20px;
  color: ${props => (props.error ? "rgb(218, 29, 29)" : "rgb(25, 118, 210)")};
`;
const Label = styled.label<{ error: boolean }>`
  margin-left: 8px;
  font-weight: lighter;
  position: absolute;
  margin-top: -10px;
  background: #fff;
  padding: 0 5px;
  background-color: rgba(32, 32, 32, 0.84);
  font-size: 20px;
  color: ${props => (props.error ? "rgb(218, 29, 29)" : "rgb(25, 118, 210)")};
`;
export const S = {
  Input,
  InputNumber,
  Label,
};
