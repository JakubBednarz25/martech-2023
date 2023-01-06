import { FunctionComponent, ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  background: boolean;
  action?: Function;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  background,
  action,
}) => {
  return (
    <button
      onClick={() => {
        if (action) {
          action();
        }
      }}
      className={`${styles.button} ${
        background ? styles.background : styles.default
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
