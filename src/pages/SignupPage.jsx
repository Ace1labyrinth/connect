import React, { useState } from "react";
import styled from 'styled-components';

function SignupPage(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDeafult();
        alert(`Signing up: ${name}`);
    };

    return(
        <Wrapper>
            <h2>Join Pro-Connect</h2>
            <form onSubmit={handleSignup}>
                <label>Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Mobile</label>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Sign Up</button>
            </form>
        </Wrapper>
    )
}

export default SignupPage;

const Wrapper = styled.section`
max-width: 400px;
margin: 5rem auto;
padding: 2rem;
border: 1px solid #eee;
border-radius: 8px;
background: #fff;
box-shadow: 0 0 10px #f0f0f0;

h2 {
    margin-bottom: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
}

labe{
    display: block;
    margin-top: 1rem;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #ccc;
}

button {
    width: 100%;
    padding: 0.75rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

`;