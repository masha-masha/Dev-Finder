import styles from "./Search.module.scss";

import React, { useRef, useEffect } from "react";

import iconSearch from "../../assets/icon-search.svg";
import { Button } from "../Button";

interface SearchProps {
 hasError: boolean;
 onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {

 const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
  if (searchRef.current) {
   searchRef.current.focus();
  }
 }, []);

 const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
  event.preventDefault();

  const text = event.currentTarget.username.value;

  if (text) {
   onSubmit(text);
   event.currentTarget.reset();
   searchRef.current?.focus();
 };
}


 return (
  <form onSubmit={handleSubmit} autoComplete="off">
   <div className={styles.search}>
    <label htmlFor="search" className={styles.label}>
     <img src={iconSearch} alt="icon search" />
    </label>
    <input
     type="text"
     className={styles.textField}
     id="search"
     name="username"
     placeholder="Search GitHub username..."
     ref={searchRef}
    />
    {hasError && <div className={styles.error}>No result</div>}
    <Button>Search</Button>
   </div>
  </form>
 );
};
