import React from "react";
import Logo from "./logoIcon.svg";
import classes from "./Header.module.scss";

const HomeLink = "/";

export const Header = () => {
  return (
    <header>
      <nav className={classes.navigation}>
        <a href={HomeLink}>
          <Logo />
        </a>
      </nav>
    </header>
  );
};
