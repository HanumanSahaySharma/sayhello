import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<IProps> = ({ children, className }): JSX.Element => {
  return <div className={`container mx-auto${className ? ` ${className}` : ""}`}>{children}</div>;
};

export default Container;
