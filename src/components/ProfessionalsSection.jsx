import React, { useState } from "react";
import styled from 'styled-components';
import ProfessionalCard from "./ProfessionalCard";

const initialProfessionals = [
    {
        name: 'Ada Chukwuma',
        category: 'Plumba',
        location: 'Enugu',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4.9,
    },
    {
        name: 'Tunde Bello',
        category: 'Electrician',
        location: 'Ogun',
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        rating: 4.7,
    },
    {
        name: 'Grace Obasi',
        category: 'Hair Stylist',
        location: 'Port Harcourt',
        image: 'https://randomuser.me/api/portraits/women/48.jpg',
        rating: 4.8,
    },
    {
        name: 'Michael Ifeanyi',
        category: 'Driver',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 4.6,
    },
    {
        name: 'Michael Ifeanyi',
        category: 'Driver',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 4.6,
    },
    {
        name: 'Michael Ifeanyi',
        category: 'Driver',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 4.6,
    },
];

const ProfessionalsSection = () => {
    const [professionals] = useState(initialProfessionals);
    const [filters, setFilters] = useState({ category: '', location: '' });

    const filtered = professionals.filter((pro) => {
        const matchCategory = filters.category ? pro.category.toLowerCase().includes(filters.category.toLowerCase()) : true;
        const matchLocation = filters.location ? pro.location.toLowerCase().includes(filters.location.toLowerCase()) : true;

         return matchCategory && matchLocation;
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };



    return(
        <Wrapper>
            <h2>Find Professionals</h2>

            <Filters>
                <input type="text" name="category" placeholder="Search by category (e.g. Plumber)" onChange={handleChange} />
                <input type="text" name="location" placeholder="Search by location (e.g. Lagos)" onChange={handleChange} />
            </Filters>

            <CardGrid>
                {filtered.map((pro, index) => (
                    <ProfessionalCard key={index} {...pro} />
                ))}
            </CardGrid>
        </Wrapper>
    )
}

export default ProfessionalsSection;

const Wrapper = styled.section`
padding: 4rem 2rem;
background: #f9f9f9;

h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
}
`;

const Filters = styled.div`
display: flex;
gap: 1rem;
max-width: 500px;
margin: 0 auto 2rem auto;

input{
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
}

@media (max-width: 500px){
    flex-direction: column;
}
`

const CardGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 2rem;
max-width: 1000px;
margin: 0 auto;
`;