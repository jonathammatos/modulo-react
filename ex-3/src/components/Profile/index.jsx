import styles from "./styles.module.css";

import Title from "../Title";
import ProfileSection from "./ProfileSection";
import LinkButton from "../LinkButton";
import { useState } from "react";

export default function Profile(props) {
  const [followText, setFollowText] = useState("Follow");

  function handClick(ev) {
    alert("Você agora está seguindo!");
    setFollowText("Following");
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        {props.name}
        {/*} <button onClick={() => alert("Você agora está seguindo")}>
          Follow
        </button> {*/}

        <button className={styles.followButton} onClick={handClick}>
          {followText}
        </button>
      </Title>

      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>

      {/*} <ProfileSection>
        <div className={styles.links}>
          <LinkButton href={props.githubUrl}>GitHub</LinkButton>
          <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
          <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
        </div>
      </ProfileSection> --> {*/}

      <ProfileSection className={styles.links}>
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  );
}
