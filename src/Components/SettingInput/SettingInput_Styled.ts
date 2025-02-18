import styled from "styled-components";
const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const InputNumber = styled.input`
  padding: 15px 25px 10px;
  border: solid 1px rgba(1, 74, 158, 0.98);
  box-shadow: 0px 0px 10px 10px rgba(1, 74, 158, 0.2);
  background-color: transparent;
  outline: none;
  border-radius: 3px;
  height: 30px;
  font-size: 20px;
  color: rgb(25, 118, 210);
`;
const Label = styled.label`
  margin-left: 8px;
  font-weight: lighter;
  position: absolute;
  margin-top: -10px;
  background: #fff;
  padding: 0 5px;
  background-color: rgba(32, 32, 32, 0.84);
  font-size: 20px;
  color: rgb(25, 118, 210);
`;
export const S = {
  Input,
  InputNumber,
  Label,
};
