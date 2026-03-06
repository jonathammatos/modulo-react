import style from "./style.module.css";

export default (props) => {
  return <button className={style.buttons}>{props.text}</button>;
};
