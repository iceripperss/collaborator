import React from "react";
import Logo from "./icon.svg";

const HomeLink = "/";

const Header = () => {
  return (
    <header>
      <nav>
        <a href={HomeLink}>
          <Logo />
        </a>
      </nav>
    </header>
  );
};

export default Header;
