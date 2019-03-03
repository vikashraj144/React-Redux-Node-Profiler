import React from "react";
import {NavLink} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
const Header = () => {

    const links = [
        {name: 'Practice', url: '/about'},
        {name: '404 Error', url: '/404Error'},

    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'}
                         to={link.url} exact>{link.name}</NavLink>
            </li>
        );
    });

    return (
        // <div className={'leftNavContainer'}>
        <div className='span4'>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler  />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to='/' exact>Home</NavLink>                
              </NavItem>
                {linksComponents}

            </Nav>
          </Collapse>
        </Navbar>
            {/* <ul>
                <li className='nav'>
                    <NavLink className={'navLink'} activeClassName={'activeNavLink'} to='/' exact>Home</NavLink>
                </li>
                {linksComponents}
            </ul> */}
        </div>
    );
};


export default Header;