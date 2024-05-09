import React from "react";
import { TestimonialSection, HomeCategoriesContainer, Face, PreTitle, SlideContainer, Star, Text, Name, Client, AdvantagesList } from "./Testimonial.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from "../../assets/img/man2.jpg";
import img2 from "../../assets/img/man1.jpg";
import img3 from "../../assets/img/girl1.jpg";
import img4 from "../../assets/img/girl2.jpg";
import stars from "../../assets/products/Star.png";

const Testimonial = () => {
  return (
    <TestimonialSection>
      <HomeCategoriesContainer>
        <PreTitle>Testimonial</PreTitle>
        <h2>What Our Customer Saying?</h2>
        <div>
          <Splide
            options={{
              perPage: 1,
              arrows: true,
              pagination: false,
              drag: "free",
              rewind: true,
              width: 700,
              breakpoints: {
                674: { perPage: 1, width: 600 },
                420: { perPage: 1, width: 400 },
              },
            }}
          >
            <SplideSlide>
              <SlideContainer>
                <Face src={img4} alt="img4" />
                <Star src={stars} alt="start" />
                <Text>
                I absolutely love this organic store! They offer an extensive 
                selection of fresh produce and organic goods. The quality of their 
                products is consistently top-notch. The staff is friendly and knowledgeable,
                always willing to assist. Highly recommend this place for anyone seeking high-quality organic products!
                </Text>
                <Name>Papita</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
            <SplideSlide>
              <SlideContainer>
                <Face src={img2} alt="img2" />
                <Star src={stars} alt="start" />
                <Text>
                My experience at this organic store has been exceptional. The service is fantastic,
                and the produce is always fresh. They stock a wide variety of organic items that cater to
                different dietary needs. It's my go-to spot for organic groceries. Plus, the ambiance of the
                store is inviting, making shopping a pleasant experience every time!
                </Text>
                <Name>Evgeniy Krasovskiy</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
            <SplideSlide>
              <SlideContainer>
                <Face src={img3} alt="img3" />
                <Star src={stars} alt="start" />
                <Text>
                This store has become my trusted source for organic groceries. They have a 
                reliable stock of organic essentials, and I appreciate their commitment to 
                sustainability and environmentally friendly practices. The prices are reasonable 
                for the quality they offer. I'm consistently impressed by their dedication to providing organic, healthy options.
                </Text>
                <Name>Alexievich Anna</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
            <SplideSlide>
              <SlideContainer>
                <Face src={img1} alt="img1" />
                <Star src={stars} alt="start" />
                <Text>
                Not only does this store offer an impressive array of organic products, but it also 
                feels like a hub for the community. The staff is passionate about their offerings and 
                often host informative events about organic living. It's more than just a store; it's a 
                place that fosters a sense of community and encourages a healthier lifestyle. Truly commendable!
                </Text>
                <Name>Misha Calvin Klein</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
          </Splide>
        </div>
        <div>
          <AdvantagesList>
            <li>
              <h5>100%</h5>
              <p>Organic</p>
            </li>
            <li>
              <h5>285</h5>
              <p>Active Product</p>
            </li>
            <li>
              <h5>350+</h5>
              <p>Organic Orchads</p>
            </li>
            <li>
              <h5>25+</h5>
              <p>Years of Farming</p>
            </li>
          </AdvantagesList>
        </div>
      </HomeCategoriesContainer>
    </TestimonialSection>
  );
};

export default Testimonial;
