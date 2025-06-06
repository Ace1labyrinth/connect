import React from "react";
import CTASection from "../components/CTASection";
import FeaturedServices from "../components/FeaturedServices";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ProfessionalsSection from "../components/ProfessionalsSection";

function Home(){
    return (
        <>
        <HeroSection />
        <HowItWorks />
        <FeaturedServices />
        <ProfessionalsSection />
        <CTASection />
        </>
    )
}

export default Home;