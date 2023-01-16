import { FunctionComponent, ReactNode } from "react";

import styles from "./Notification.module.scss";

type NotificationProps = {
  children: ReactNode;
  type: "warning" | "success";
};

const Notification: FunctionComponent<NotificationProps> = ({
  children,
  type,
}) => {
  return (
    <div
      className={`${styles.notification} ${
        type === "warning" ? styles.warning : styles.success
      }`}
    >
      {type === "warning" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      )}
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default Notification;
