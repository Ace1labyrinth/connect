import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar(){
    const [open, setOpen] = useState(false);

    return(
        <NavContainer>
            <Logo>
                <Link to="/">Pro-Connect</Link>
            </Logo>
            <Hamburger onClick={() => setOpen(!open)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <NavLinks open={open}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/join">Join</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </NavLinks>
        </NavContainer>
    )
}


export default Navbar;

const NavContainer = styled.nav`
padding: 1rem 2rem;
background: #fff;
border-bottom: 1px solid #eee;
box-shadow: ${({ theme }) => theme.shadows.card};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`;

const Logo = styled.h1`
font-size: 1.5rem;
font-weight: bold;
a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
}
`;

const NavLinks = styled.ul`
display: flex;
list-style: none;
gap: 2rem;

li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transform: color 0.3s ease;

    &:hover {
        color: ${({ theme })=> theme.colors.primary};
    }
}
@media (max-width: 768px) {
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fff;
    border-top: 1px solid #eee;
    padding: 1rem 1rem;
    gap: 1rem;
    display: ${({ open }) => (open ? 'flex' : 'none' )};
}
`;

const Hamburger = styled.div`
display: none;
flex-direction: column;
gap: 5px;
cursor: pointer;

span {
    height: 3px;
    width: 25px;
    background: #333;
    border-radius: 2px;
}

@media (max-width: 768px) {
    display: flex;
}
`;