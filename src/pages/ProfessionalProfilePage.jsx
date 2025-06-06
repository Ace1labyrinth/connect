import React from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const dummyProfiles = {
    'Ada Chukwuma': {
        name: 'Ada Chukwuma',
        category: 'Plumber',
        location: 'Enugu',
        rating: 4.9,
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        bio: 'Experienced Plumber with 10+ years of work in residential and commercial plumbing.',
    },
    'Michael Ifeanyi': {
        name: 'Michael Ifeanyi',
        category: 'Driver',
        location: 'Lagos',
        rating: 4.6,
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        bio: 'Experienced Driver with 10+ years of work in residential and commercial Driving.',
    },
    'Grace Obasi': {
        name: 'Grace Obasi',
        category: 'Hair Dresser',
        location: 'Port Harcourt',
        rating: 4.8,
        image: 'https://randomuser.me/api/portraits/women/48.jpg',
        bio: 'Experienced Hair Dresser with 10+ years of work in residential and commercial hair Dresser.',
    },
    'Tunde Bello': {
        name: 'Tunde Bello',
        category: 'Electrician',
        location: 'Ogun',
        rating: 4.7,
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        bio: 'Experienced Electrician with 10+ years of work in residential and commercial in fixing appliances.',
    },
    'Taiwo Stephen': {
        name: 'Taiwo Stephen',
        category: 'Contractor',
        location: 'Abuja',
        rating: 4.9,
        image: 'https://randomuser.me/api/portraits/men/40.jpg',
        bio: 'Experienced Contractor with 10+ years of work in residential and commercial Contracting.',
    },
};

const ProfessionalProfilePage = () => {

    const { name } = useParams();
    const profile = dummyProfiles[decodeURIComponent(name)];

    if (!profile) {
        return <Container><h2>Profile not found</h2></Container>;
    }


    return(
        <Container>
            <img src={profile.image} alt={profile.name} />
            <h1>{profile.name}</h1>
            <p><strong>Service:</strong> {profile.category}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Rating:</strong> {profile.rating}</p>
            <p>{profile.bio}</p>
            <RequestButton>Request Service</RequestButton>
        </Container>
    )
}

export default ProfessionalProfilePage;

const Container = styled.div`
max-width: 700px;
margin: 4rem auto;
padding: 2rem;
background: #fff;
border-radius: 10px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
text-align: center;

img {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
}

h1 {
    margin-bottom: 0.5rem;
}

p {
    margin-bottom: 0.5rem;
    color: #555;
}

@media (max-width: 768px){
    max-width: 500px
}
`;

const RequestButton = styled.button`
background: ${({ theme }) => theme.colors.primary};
color: #fff;
padding: 0.75rem 1.5rem;
border: none;
margin-top: 1.5rem;
border-radius: 5px;
cursor: pointer;

&:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
}

`