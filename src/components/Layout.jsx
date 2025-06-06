import React from "react";
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = () => {
    return(
        <Wrapper>
            <Navbar />
            <Outlet />
            <Footer />
        </Wrapper>
    )
}


export default Layout;

const Wrapper = styled.div``;