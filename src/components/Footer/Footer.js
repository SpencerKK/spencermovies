import React from "react";
import styles from "./Footer.module.css";
import mdblogo from "../../img/mdblogo.png";

const Footer = () => {
  return (
    <div className={styles.footerBody}>
      <h2>Spencer Movies</h2>
      <p>made with</p>
      <img id={styles.mdblogo} src={mdblogo} alt="moviedb logo" />
    </div>
  );
};

export default Footer;