import React from "react";
import HowItWorks from '../components/HowItWorks';
import styled from 'styled-components';


function HowItWorksPage(){
    return(
        <Container>
            <h1>How It Works</h1>
            <Steps>
                <Step>
                    <h2>1. Find a Pro</h2>
                    <p>Search by category, rating, or location to discover trusted experts in seconds.</p>
                </Step>
                <Step>
                    <h2>2. Connect</h2>
                    <p>View full profiles and request a service with just one click - no hidden steps.</p>
                </Step>
                <Step>
                    <h2>3. Get It Done</h2>
                    <p>The professional arrives, delivers quality service, and gets paid. That's it!</p>
                </Step>
            </Steps>
            <HowItWorks />
        </Container>
    )
}

export default HowItWorksPage;

const Container = styled.div`
max-width: 900px;
margin: 3rem auto;
padding: 2rem;
text-align: center;

h1 {
    color: ${({ theme }) => theme.colors.primary};
}
`;

const Steps = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
}
`;

const Step = styled.div`
flex: 1;
background: #f9f9f9;
padding: 2rem;
border-radius: 10px;

h2 {
    color: ${({ theme }) => theme.colors.primary};
}

p {
    color: #555;
    margin-top: 0.5rem;
}
`;