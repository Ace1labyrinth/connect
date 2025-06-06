import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer(){
    return(
        <Wrapper>
            <p>&copy; {new Date().getFullYear()} Pro-Connect. Built by Labyrinth 
            <br/> 
            <Link to="/terms">Terms</Link> | <Link to="/Privacy">Privacy</Link></p>
        </Wrapper>
    )
}


export default Footer;

const Wrapper = styled.footer`
padding: 2rem;
background: ${({ theme }) => theme.colors.bg};
text-align: center;
font-size: 0.95rem;
color: #444;
border-top: 1px solid #eaeaea;

@media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 1.5rem 0.75rem;
}
`;