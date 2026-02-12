import styles from "./ErrorMessage.module.css";

function ErrorMessage({ text }) {
  return <div className={styles.box}>{text}</div>;
}

export default ErrorMessage;
