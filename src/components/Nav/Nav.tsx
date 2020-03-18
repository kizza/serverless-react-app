import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

export default () => (
  <ul className={styles.Nav}>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/faq">FAQ</NavLink>
    </li>
  </ul>
);
