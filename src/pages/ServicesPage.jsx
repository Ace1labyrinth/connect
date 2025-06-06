import React from "react";
import styled from 'styled-components';
import FeaturedServices from '../components/FeaturedServices';


const services = [
    { title: 'Electricians', icon: '🔌'},
    { title: 'Plumbers', icon: '🔧'},
    { title: 'Mechanics', icon: '🚗'},
    { title: 'Cleaners', icon: '🧼'},
    { title: 'Hair Stylists', icon: '💇🏼‍♀️'},
    { title: 'Fashion Designers', icon: '🧵'},
    { title: 'Tutors', icon: '📚'},
    { title: 'Medical Experts', icon: '🩺'},
    { title: 'Laundry', icon: '🧽'},
    { title: 'Caterer', icon: '🥟'},
];

function ServicesPage(){
    return(
        <Container>
            <h1>Our Services</h1>
            <Grid>
                {services.map((service, index) => (
                    <Card key={index}>
                        <Icon>{service.icon}</Icon>
                        <Title>{service.title}</Title>
                    </Card>
                ))}
            </Grid>
            <FeaturedServices />
        </Container>
    )
}

export default ServicesPage;

const Container = styled.div`
max-width: 1000px;
margin: 4rem auto;
padding: 2rem;
text-align: center;

h1 {
    color: ${({ theme }) => theme.colors.primary};
}
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
gap: 2rem;
margin-top: 2rem;
`;

const Card = styled.div`
background: #f1f1f1;
padding: 1.5rem;
border-radius: 10px;
transition: 0.5s ease;
cursor: pointer;

&:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
}
`;

const Icon = styled.div`
font-size: 2.5rem;
margin-bottom: 0.5rem;
`;

const Title = styled.h3`
margin: 0;
`;