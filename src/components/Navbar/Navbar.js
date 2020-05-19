import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <h1>Spencer Movies</h1>
        <ul>
          <NavLink
            exact
            activeClassName='is-active'
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none"
            }}
            style={{ textDecoration: "none" }}
            to="/"
          >
            <li>Movies</li>
          </NavLink>
          <NavLink
            activeClassName='is-active'
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none"
            }}
            style={{ textDecoration: "none" }}
            to="/shows"
          >
            <li>TV</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar; 