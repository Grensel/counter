import { SxProps } from "@mui/material";
export const containerSx: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  p: "25px",
  border: "2px solid rgba(1, 74, 158, 0.98)",
  boxShadow: "0px 0px 10px 10px rgba(1, 74, 158, 0.2)",
  borderRadius: "10px",
};
export const containerSSx: SxProps = {
  display: "flex",
  justifyContent: "center",
  p: "25px",
  border: "2px solid rgba(1, 74, 158, 0.98)",
  boxShadow: "0px 0px 10px 10px rgba(1, 74, 158, 0.2)",
  borderRadius: "10px",
};
export const counterCon: SxProps = {
  p: "25px",
  border: "2px solid rgba(1, 74, 158, 0.98)",
  borderRadius: "10px",
  backgroundColor: "rgba(32, 32, 32, 0.84)",
  boxShadow: "0px 0px 100px 20px rgba(1, 74, 158, 0.2)",
  height: "50vh",
};
export const buttonStyle: SxProps = {
  boxShadow: "0px 0px 10px 10px rgba(1, 74, 158, 0.2)",
  "&:disabled": {
    border: "1px solid rgba(218, 29, 29,0.2)",
    color: "rgba(218, 29, 29,0.7)",
    boxShadow: "0px 0px 10px 5px rgb(201, 25, 25,0.2)",
  },
};

export const CounterDisplayValue = (incDisabled: boolean): SxProps => ({
  color: incDisabled ? "rgb(218, 29, 29)" : "rgb(25, 118, 210)",
  backgroundColor: incDisabled ? "rgba(201, 25, 25, 0.22)" : "transparent",
  boxShadow: incDisabled ? "0px 0px 60px 10px rgb(201, 25, 25,0.45)" : "",
});
