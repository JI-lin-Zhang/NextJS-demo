import { FC, ReactNode } from "react";
import classes from "./error-alert.module.css";

interface IErrorAlert {
  children: ReactNode;
}

const ErrorAlert: FC<IErrorAlert> = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
