import React from "react";
import { EcoSection, EcoWrap } from "./Eco.styled";

const Eco = () => {
  return (
    <EcoSection>
      <EcoWrap>
        <h5>Eco Friendly</h5>
        <h2>
          Econis is a Friendly <br /> Organic Store
        </h2>
        <ul>
          <li>
            <h4>Start with Our Company First</h4>
            <p>
            Our company prioritizes innovation and customer satisfaction, striving 
            to deliver cutting-edge solutions and exceptional services in the market.
            </p>
          </li>
          <li>
            <h4>Learn How to Grow Yourself</h4>
            <p>
            Personal growth is a continuous journey of self-improvement, 
            involving learning new skills, embracing challenges, and fostering a growth mindset.
            </p>
          </li>
          <li>
            <h4>Farming Strategies of Today</h4>
            <p>
            Modern farming strategies incorporate sustainable practices, 
            leveraging technology and precision agriculture to optimize crop yields while minimizing environmental impact.
            </p>
          </li>
        </ul>
      </EcoWrap>
    </EcoSection>
  );
};

export default Eco;
