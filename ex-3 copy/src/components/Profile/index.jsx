import styles from "./styles.module.css";

import Title from "../Title";

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        {props.name}
        <button>Follow</button>
      </Title>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <a href={props.githubUrl} target="_blank">
          GitHub
        </a>
        <a href={props.linkedinUrl} target="_blank">
          LinkedIn
        </a>
        <a href={props.twitterUrl} target="_blank">
          Twitter
        </a>
      </div>
    </div>
  );
}
