import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import Button from '../Button';
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn } from './NavbarElements';

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="home" onClick={toggleHome}>faber</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="blog"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >Contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Button to="contact"
              primary="true"
              dark="true"
              big="false"
            >Contact</Button>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;
