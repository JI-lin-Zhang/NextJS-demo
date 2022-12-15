import Link from "next/link";
import React, { FC, ReactNode } from "react";
import classes from "./button.module.css";

interface IButtonOwnProps {
  url?: string;
  children?: ReactNode;
}

const Button: FC<IButtonOwnProps> = (props) => {
  const { url, children } = props;

  if (url) {
    return (
      <Link className={classes.btn} href={url}>
        {children}
      </Link>
    );
  }
  return <button className={classes.btn}>{children}</button>;
};

export default Button;
