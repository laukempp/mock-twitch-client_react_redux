import React from "react";
// import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Twitcher
      </Link>
      <div className="right menu">
        <Link to="/" className="right menu">
          All streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
