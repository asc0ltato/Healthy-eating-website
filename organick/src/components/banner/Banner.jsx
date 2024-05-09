import React from "react";
import { BannerContainer, Banner1, Banner2 } from "./Banner.styled";

const Banner = () => {
  return (
    <BannerContainer>
      <Banner1>
        <p>Natural!!</p>
        <h3>
          Get Garden <br /> Fresh Fruits
        </h3>
      </Banner1>
      <Banner2>
        <p>Offer!!</p>
        <h3>
          Get 10% off <br /> on Vegetables
        </h3>
      </Banner2>
    </BannerContainer>
  );
};

export default Banner;