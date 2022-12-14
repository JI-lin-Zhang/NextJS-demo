import Link from "next/link";
import React from "react";
import classes from "./button.module.css";
import ArrowRightIcon from '../icons/arrow-right-icon';

interface IButtonOwnProps {
  link: string;
  LinkContent: any;
}

export default function Button(props: IButtonOwnProps) {
  const { link, LinkContent } = props;
  return (
    <Link className={classes.btn} href={link}>
      {LinkContent}
      <span className={classes.icon}>
        <ArrowRightIcon />
      </span>
    </Link>
  );
}
