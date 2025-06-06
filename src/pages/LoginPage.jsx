import React, { useState } from "react";
import styled from 'styled-components';


function LoginPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        alert(`Logging in with ${email}`);
    };



    return(
       <Wrapper>
            <h2>Login to Pro-Connect</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Login</button>
            </form>
        </Wrapper>
    )
}

export default LoginPage;

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
label {
    display: block;
    margin-top: 1rem;
    font-weight: 500;
}
input{
    width: 100%;
    padding: 0.75rem;
    margin-top: 2rem;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
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
    transition: 0.5s ease;
}

`;