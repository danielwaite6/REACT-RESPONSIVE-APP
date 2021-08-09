import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Nav, NavContainer, NavIcon, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu } from './NavBar.elements'


export function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);



    return (
        <>
            <IconContext.Provider value={{ color: '#FFF' }}>
                <Nav>
                    <NavContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            ULTRAMAN
                        </NavLogo>
                        <MobileIcon
                            onClick={handleClick}
                        >
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/Home'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>products</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}


