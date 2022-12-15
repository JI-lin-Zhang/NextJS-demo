import React, { FC, Fragment, ReactNode } from "react";
import MainHeader from "./mainHeader";

interface ILayoutOwnProps {
  children: ReactNode;
}

const Layout: FC<ILayoutOwnProps> = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
