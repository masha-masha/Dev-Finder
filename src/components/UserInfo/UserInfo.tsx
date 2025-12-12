import styles from './UserInfo.module.scss';
import { LocalGithubUser } from "../../types";
import iconBlog from "../../assets/icon-website.svg";
import iconLocation from "../../assets/icon-location.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconCompany from "../../assets/icon-company.svg";
import { InfoItem, InfoItemProps } from '../InfoItem';

export type UserInfoProps = Pick<
 LocalGithubUser,
 "blog" | "company" | "location" | "twitter"
>;



export const UserInfo = ({ blog, company, location, twitter}: UserInfoProps) => {

const items: InfoItemProps[] = [
 {
  icon: <img src={iconLocation} alt="loction icon"/>,
  text: location,
 },
 {
  icon: <img src={iconBlog} alt="blog icon"/>,
  text: blog,
  isLink: true,
 },
 {
  icon: <img src={iconTwitter} alt="blog icon"/>,
  text: twitter,
 },
 {
  icon: <img src={iconCompany} alt="company icon"/>,
  text: company,
 },
]

   return (
  <div className={styles.userInfo} >
    {items.map((item, index) => <InfoItem {...item} key={index}/>)}
  </div>
);
}

