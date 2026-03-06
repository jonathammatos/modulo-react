import Button from "../Button";

import style from "./style.module.css";
export default function Card(props) {
  return (
    <div className={style.card}>
      <img src={props.profileImg} alt="" />
      <h1>{props.name}</h1>

      <div>
        <p>{props.description}</p>
      </div>

      <div>
        <p>{props.phone}</p>
      </div>

      <div>
        <p>{props.email}</p>
      </div>

      <div className={style.buttons}>
        <Button text="GitHub" />

        <Button text="LinkedIn" />

        <Button text="Twitter" />
      </div>
    </div>
  );
}
