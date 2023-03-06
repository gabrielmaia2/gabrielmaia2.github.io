import React from "react";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={`${styles.navBar} d-flex fixed-top w-100 px-3 m-0`}>
      <a href="/" className="p-3">
        Home
      </a>
      <a href="/about" className="p-3">
        About me
      </a>
      <a href="/resume-en" className="p-3">
        Resume
      </a>
      <a href="/resume" className="p-3">
        Resume (BR)
      </a>
    </nav>
  );
}
