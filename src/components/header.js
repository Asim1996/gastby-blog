import React from 'react';
// import { Link} from 'gatsby';
import { Link, graphql, useStaticQuery } from 'gatsby'
import logo from "../images/logo.png";
import ThemeChanger from "../components/themeChanger"
const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-wrapper">
        <h2 className="logo-text">
        {"< "}
        <img src={logo} className="logo-img" alt="<404 Found>" />
        {" Found />"}
        </h2>
      </div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <ThemeChanger />
      </nav>
    </header>
  )
}

export default Header;