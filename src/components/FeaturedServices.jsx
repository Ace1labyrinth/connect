import React from "react";
import styled from 'styled-components';
import ServicesPage from "../pages/ServicesPage";

function FeaturedServices(){
    return(
        <Wrapper>
            <h2>Featured Services</h2>
            <CardContainer>
                {services.map ((service, index) => (
                    <Card key={index}>
                        {/* <img src={service.image} alt={service.title} /> */}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Card>
                ))}
            </CardContainer>
        </Wrapper>
    )
}

export default FeaturedServices;

const services = [
    {
        image: '/api/portraits/lego/3.jpg',
        title: 'Professional Drivers',
        description: 'Hire licensed drivers for personal or commercial needs.',
    },
    {
        image: '/assets/image2.jpeg',
        title: 'Certified Engineers',
        description: 'Find engineers for construction, tech, and more.',
    },
    {
        image: '/assets/image2.jpeg',
        title: 'Medical Experts',
        description: 'Connect with trained nurses and caregivers.',
    },
    {
        image: '/assets/image2.jpeg',
        title: 'Fashion Designers',
        description: 'Discover creative fashion talents near you.',
    },
];

const Wrapper = styled.section `
padding: 4rem;
backgroun: ${({ theme }) => theme.colors.bg};

h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
}
`;
const CardContainer = styled.div `
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`;
const Card = styled.div`
background: #fff;
padding: 1.5rem;
border-radius: 10px;
box-shadow: ${({ theme }) => theme.shadows.card};
text-align: center;
width: 250px;
transition: transform 0.5s ease;

&:hover {
    transform: translateY(5px);
}
img {
    height: 100px;
    object-fit: conatin;
    margin-bottom: 1rem;
}
h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

p {
    font-size: 0.95rem;
    color: #555;
}
`;