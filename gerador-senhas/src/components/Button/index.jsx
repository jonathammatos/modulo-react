import styles from "./styles.module.css";

export default function Button(props) {
  return (
    <button
      className={`${styles.button} ${props.classe}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
