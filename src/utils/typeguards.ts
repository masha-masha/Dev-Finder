import { GithubUser } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isGithubUser = (user: any): user is GithubUser => 'id' in user; 
