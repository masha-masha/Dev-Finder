import styles from "./UserCard.module.scss";
import { LocalGithubUser } from "../../types";
import { UserStat } from "../UserStat";
import { UserTitle } from "../UserTitle";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserCardProps extends LocalGithubUser {}


export const UserCard = (props: UserCardProps) => {
 return (
  <div className={styles.userCard}>
   <img src={props.avatar} alt={props.login} className={styles.avatar}/>
   <UserTitle 
   created={props.created}
   login={props.login}
   name={props.name}
   />
   <UserStat
    repos={props.repos}
    followers={props.followers}
    following={props.following}
   />
  </div>
 );
};
