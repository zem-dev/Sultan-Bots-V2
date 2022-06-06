import { Nav, Navbar, NavLink } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Container } from "react-bootstrap";

import "../css/navbar-styles.css"

import logo from "../images/logo.png";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";

const HomeNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </NavbarBrand>

      <Nav className="ms-auto">
        <NavLink>
          <img
            alt=""
            src={twitter}
            width="30"
            height="30"
            className="d-inline-block align-top social-icon"
          />
        </NavLink>

        <NavLink>
          <img
            alt=""
            src={youtube}
            width="30"
            height="30"
            className="d-inline-block align-top social-icon yt-icon"
          />
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default HomeNavbar;
