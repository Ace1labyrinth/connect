import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfessionalCard = ({ name, category, location, image, rating }) => {
    return(
        <Card>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{location}</p>
        <Rating>⭐️ {rating}</Rating>
        <button><Link to={`/profile/${encodeURIComponent(name)}`}>View Profile</Link></button>
        </Card>
    )
}

export default ProfessionalCard;

const Card = styled.div`
background: #fff;
border: 1px solid #eee;
border-radius: 10px;
padding: 2rem;
text-align: center;
box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
transition: transform 0.5s;
max-width: 280px;

&:hover {
    transform: translateY(5px);
}
img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}

h3 {
    margin: 0.5rem 0;
}

p {
    color: #555;
    margin: 0.2rem 0;
}

button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}
@media (max-width: 500px) {
  max-width: 100%;
}
`;

const Rating = styled.span`
margin-top: 0.3rem;
font-size: 0.9rem;
color: #f39c12;
`;