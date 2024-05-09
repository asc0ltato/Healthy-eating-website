import React from "react";
import circle from "../../../assets/img/about/kryg.svg";
import { ChoseeContainer, ChoseeInfoWrap, ChoseeText, ChoseeImgWrap, ChoseeSection, ChoseeImgContainer } from "./AboutChosee.styled";
import img1 from "../../../assets/img/about/telezhka.svg";
import img2 from "../../../assets/img/about/clock.svg";
import img3 from "../../../assets/img/about/leaf.svg";
import img4 from "../../../assets/img/about/card.svg";

const AboutChosee = () => {
  return (
    <ChoseeSection>
      <ChoseeContainer>
        <ChoseeInfoWrap>
          <h4>Why Choose us?</h4>
          <h3>We do not buy from the open market & traders.</h3>
          <p>
          Choosing us means opting for a holistic experience where 
          every product is thoughtfully curated, ensuring authenticity,
          purity, and a sustainable journey towards a healthier lifestyle.
          </p>
          <ul>
            <li>
              <div>
                <img src={circle} alt="circle" />
                <h5>100% Natural Product</h5>
              </div>
              <ChoseeText>
              Experience the assurance of 100% natural goodness with our carefully 
              sourced products, embracing purity and authenticity in every item at our organic store.
              </ChoseeText>
            </li>
            <li>
              <div>
                <img src={circle} alt="circle" />
                <h5>Increases resistance</h5>
              </div>
              <ChoseeText>
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </ChoseeText>
            </li>
          </ul>
        </ChoseeInfoWrap>
        <ChoseeImgWrap></ChoseeImgWrap>
      </ChoseeContainer>
      <ChoseeImgContainer>
        <ul>
          <li>
            <span>
              <img src={img1} alt="img1" />
            </span>
            <h4>Return Policy</h4>
            <p>Our organic store proudly stands behind a flexible return policy, ensuring your satisfaction and ease of mind with every purchase.</p>
          </li>
          <li>
            <span>
              <img src={img2} alt="img2" />
            </span>
            <h4>100% Fresh</h4>
            <p>Rest assured, each product in our selection is guaranteed to be 100% fresh, embodying the essence of purity and quality that defines our commitment to organic goods.</p>
          </li>
          <li>
            <span>
              <img src={img3} alt="img3" />
            </span>
            <h4>Support 24/7</h4>
            <p>With our round-the-clock customer support, we're dedicated to assisting you at any time, providing guidance and assistance throughout your organic shopping journey.</p>
          </li>
          <li>
            <span>
              <img src={img4} alt="img4" />
            </span>
            <h4>Secured Payment</h4>
            <p>Experience peace of mind while shopping securely with our trusted and encrypted payment system, ensuring a safe and reliable transaction process for all your organic purchases.</p>
          </li>
        </ul>
      </ChoseeImgContainer>
    </ChoseeSection>
  );
};

export default AboutChosee;
