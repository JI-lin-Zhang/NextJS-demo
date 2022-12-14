import Link from "next/link";
import React, { FC, ReactNode } from "react";
import classes from "./button.module.css";

interface IButtonOwnProps {
  url: string;
  children?: ReactNode;
}

const Button: FC<IButtonOwnProps> = (props) => {
  const { url, children } = props;
  return (
    <Link className={classes.btn} href={url}>
      {children}
    </Link>
  );
};

export default Button;
