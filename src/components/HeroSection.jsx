import React from "react";
import styled from 'styled-components';
import heroImg from '../assets/illustration2.jpg';

function HeroSection(){
    return(
        <Wrapper>
            <Content>
                <h1>Connect with Trusted Professionals</h1>
                <p>Find skilled experts like drivers, engineers, nurses, and designers all in one place - fast and reliable.</p>
            </Content>
            <HeroImage>
                <img src={heroImg} alt="Pro-Connect Illustration" />
            </HeroImage>
        </Wrapper>
    )
}

export default HeroSection;

const Wrapper = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
padding: 4rem 2rem;
background: ${({ theme }) => theme.colors.primaryGradient};
color: #fff;
flex-wrap: wrap;

@media (max-width: 768px){
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
}
`;

const Content = styled.div`
flex: 1;
max-width: 600px;

h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}
p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}
`;

const HeroImage = styled.div`
flex: 1;
display: flex;
justify-content: center;
padding: 2rem;

img {
    max-width: 50%;
    height: auto;
    border-radius: 40%;
}
@media (max-width: 768px){
    max-width: 80%;
}
`;