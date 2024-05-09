import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HeroSection, HeroContainer, HeroPreTitle, HeroTitle, HeroLink, HeroSpan } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroPreTitle>100% Natural Food</HeroPreTitle>
        <HeroTitle>
          Choose the best healthier way <br />
          of life
        </HeroTitle>
        <HeroLink to={"/about"}>
          <HeroSpan>
            Explore Now <BsFillArrowRightCircleFill size={19} />
          </HeroSpan>
        </HeroLink>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
