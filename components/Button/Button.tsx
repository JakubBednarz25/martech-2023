import { FunctionComponent, ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  background: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ children, background }) => {
  return (
    <button
      className={`${styles.button} ${background ? styles.background : styles.default}`}
    >
      {children}
    </button>
  );
};

export default Button;
