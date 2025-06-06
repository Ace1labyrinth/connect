import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function CTASection(){
    return(
        <Wrapper>
            <Content>
                <h2>Ready to get Started?</h2>
                <p>Join thousands of users already connecting with top professionals.</p>

                <CTAButton to="/signup">
                Join Pro-Connect
            </CTAButton>
                
            </Content>
        </Wrapper>
    )
}

export default CTASection;

const Wrapper = styled.section`
background: ${({ theme }) => theme.colors.primary};
padding: 4rem 2rem;
color: #fff;
text-align: center;
`;

const Content = styled.div`
max-width: 700px;
margin: 0 auto;

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
p {
font-size: 1.1rem;
margin-bottom: 2rem;
}


button {
    background: #fff;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    font-size: 1rem;
    transition: 0.3s;

    &:hover {
        background: #e9ecef;
    }
}
`;

const CTAButton = styled(Link)`
background: #fff;
color: ${({ theme }) => theme.colors.primary};
padding: 1rem 2rem;
text-decoration: none;
font-weight: bold;
border-radius: 8px;
transition: 0.5s ease;

&:hover {
    color: ${({ theme }) => theme.colors.Lightbg};
}`;