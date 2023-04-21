import styles from "@/styles/components/Modal.module.scss";
import { ReactNode } from "react";

const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className={styles.modal}>
      <div className={`container-lg ${styles.bodyWrapper}`}>
        <div className={styles.contentWrapper}>{children}</div>
        <button
          className={`action-button ${styles.closeButton}`}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
