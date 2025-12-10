import styles from "./Search.module.scss";

import React, { useRef, useEffect } from "react";

import iconSearch from "../../assets/icon-search.svg";
import { Button } from "../Button";

interface SearchProps {
 hasError: boolean;
 onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
 const searchRef = useRef<HTMLInputElement | null>(null);

 const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const text = searchRef.current?.value || "";

    if(text) {
        onSubmit(text);
        if (searchRef.current) {
        searchRef.current.value = "";
        searchRef.current.focus();
      }
    }
 };

 useEffect(() => {
  if (searchRef.current) {
   searchRef.current.focus();
  }
 }, []);

 return (
  <form onSubmit={handleSubmit} autoComplete="off" >
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
