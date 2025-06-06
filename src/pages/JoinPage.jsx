import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function JoinPage(){
    return(
        <Container>
            <h1>Join Pro-Connect</h1>
            <p>Are you a skilled professional looking to grow your client base?</p>

            <Reasons>
                <Reason>
                    <h3>📢 Get Discovered</h3>
                    <p>Reach hundreds of potential clients actively searching for your service.</p>
                </Reason>
                <Reason>
                    <h3>💼 Manage Your Profile</h3>
                    <p>Showcase your experience, services, location, and ratings in one place.</p>
                </Reason>
                <Reason>
                    <h3>💰 Earn More</h3>
                    <p>Get booked directly without expensive middlemen or commissions.</p>
                </Reason>
            </Reasons>
            <CTAButton to="/signup">
                Join Now
            </CTAButton>
            <br/><br/>
            <small>“Since joining Pro-Connect, my client bookings have doubled!” — A. Pro</small>
        </Container>
    )
}

export default JoinPage;

const Container = styled.div`
max-width: 1000px;
text-align: center;
margin: 4rem auto;
padding: 2rem;
text-align: center;

h1 {
    color: ${({ theme }) => theme.colors.primary};
}
`;

const Reasons = styled.div`
display: grid;
gap: 2rem;
margin: 3rem 0;

@media (min-width: 768px){
    grid-template-columns: repeat(3, 1fr);
}
`

const Reason = styled.div`
background: #f2f2f2;
padding: 2rem;
border-radius: 10px;

h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
}

p {
    color: #555;
}
`;

const CTAButton = styled(Link)`
background: ${({ theme }) => theme.colors.primary};
color: #fff;
padding: 1rem 2rem;
text-decoration: none;
font-weight: bold;
border-radius: 8px;
transition: 0.5s ease;

&:hover {
    color: ${({ theme }) => theme.colors.bgLight};
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
`;