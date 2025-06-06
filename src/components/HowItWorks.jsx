import React from "react";
import styled from 'styled-components';

function HowItWorks(){
    return(
       <Wrapper>
        <h2>How It Works</h2>
        <StepsContainer>
            {steps.map((step, index) => (
                <StepCard key={index}>
                    <Icon>
                        {step.icon}
                    </Icon>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </StepCard>
            ))}
        </StepsContainer>
       </Wrapper>
    )
}
export default HowItWorks;

const steps = [
    {
        icon: '🔎',
        title: 'Search Professionals',
        description: 'Browse through a list of verified experts by category.',
    },
    {
        icon: '📞',
        title: 'Connect Instantly',
        description: 'Enjoy reliable service with ratings and reviews.',
    },
    
]

const Wrapper = styled.section`
padding: 4rem 2rem;
background: ${({ theme }) => theme.colors.bgLight};
text-align: center;
cursor: pointer;

h2 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
}
`;

const StepsContainer = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`;

const StepCard = styled.div`
background: #fff;
padding: 2rem;
border-radius: 10px;
box-shadow: ${({ theme }) => theme.shadows.card};
width: 300px;
text-align: center;
transition: transform .5s ease;

&:hover {
    transform: translateY(5px);
}

h3 {
    margin: 1rem 0 0.5rem;
}
p {
    color: #555;
}
`;
const Icon = styled.div`
font-size: 2rem;
`;