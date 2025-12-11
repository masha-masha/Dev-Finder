import styles from "./UserCard.module.scss";
import { LocalGithubUser } from "../../types";
import { UserStat } from "../UserStat";

type UserCardProps = Pick<LocalGithubUser, "repos" | "followers" | "following">;

export const UserCard = (props: UserCardProps) => (
 <div className={styles.userCard}>
  <UserStat
   repos={props.repos}
   followers={props.followers}
   following={props.following}
  />
 </div>
);
