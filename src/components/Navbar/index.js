import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink 
} from './NavbarElements'
import { IconContext } from 'react-icons/lib';

const Navbar = ({toogle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80)
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toogleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toogleHome}>
                    Cavalab
                </NavLogo>
                <MobileIcon onClick={toogle}>
                  <FaBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks 
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      activeClass="active"
                    >
                      About
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                      to="discover"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      Discover
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                      to="services"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      Services
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                      to="signup"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      Sign Up
                    </NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink 
                    to="/signin"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Sign In
                  </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
