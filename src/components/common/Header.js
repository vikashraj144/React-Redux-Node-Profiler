import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/variables";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const NavList = styled(NavLink)`
  color: ${colors.white};
  text-decoration: none;
  position: relative;
  float: left;
  padding-right: 10px;
  &:hover {
    color: ${colors.blue};
  }
  &.active {
    border-bottom: 2px solid red;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    color: ${colors.blue};
    font-size: 1.25rem;
  }
`;

const List = styled.li`
  margin-right: 15px;
  display: block;
`;
const Header = () => {
  const links = [
    { name: "Home", url: "/about" },
    { name: "About", url: "/about" },
    { name: "Resume", url: "/about" },
    { name: "My Offer", url: "/about" },
    { name: "My Project", url: "/about" },
    { name: "Choose Me", url: "/about" },
    { name: "Blog", url: "/about" },
    { name: "Get in Touch", url: "/about" },
  ];
  const classes = useStyles();

  let linksComponents = links.map((link, index) => {
    return (
      <List key={index} className={"nav-item"}>
        <NavList
          className={"navLink"}
          activeClassName="active"
          to={link.url}
          exact
        >
          {link.name}
        </NavList>
      </List>
    );
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {linksComponents}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
