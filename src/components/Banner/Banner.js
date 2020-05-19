import React from "react";
import styles from "./Banner.module.css";
import Searchbar from "../Searchbar/Searchbar";

// import Searchbar from "../Searchbar/Searchbar";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h2>Browse a massive collection of shows and movies -  Find related titles</h2>
        <Searchbar />
      </div>
    </div>
  );
};

export default Banner;