import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const links = [
    { name: "About", url: "/about" },
    { name: "Experience", url: "/experience" },
    { name: "404 Error", url: "/404Error" },
  ];

  let linksComponents = links.map((link, index) => {
    return (
      <li key={index} className={"nav-item"}>
        <NavLink
          className={"navLink"}
          activeClassName={"activeNavLink"}
          to={link.url}
          exact
        >
          {link.name}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="span4">
      Header
      {/* <Navbar color="light" light expand="md">
        <NavLink
          className={"navLink"}
          activeClassName={"activeNavLink"}
          to="/"
          exact
        >
          Profiler
        </NavLink>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            {linksComponents}
          </Nav>
        </Collapse>
      </Navbar> */}
    </div>
  );
};

export default Header;
