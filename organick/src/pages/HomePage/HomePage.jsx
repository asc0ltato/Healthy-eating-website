import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import Testimonial from "../../components/testimonial/Testimonial";
import Eco from "../../components/eco/Eco";
import { products } from "../../helpers/products";
import HomeProducts from "../../components/homeProduts/HomeProducts";
import { HomeCategoriesContainer, ProductsWrap, Categories, Button } from "./HomePage.styled";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const itemsPerRow = 8;

const HomePage = () => {
  const [next, setNext] = useState(itemsPerRow);

  const handleMore = () => {
    setNext(next + itemsPerRow);
  };

  return (
    <div>
      <Hero />
      <Banner />
      <HomeCategoriesContainer>
        <Categories>Categories</Categories>
        <h2>Our Products</h2>
        <ProductsWrap>
          {products?.slice(0, next)?.map((product, id) => {
            return (
              <HomeProducts
                key={id}
                kind={product.kind}
                img={product.img}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                quality={product.quality}
                id={id}
              ></HomeProducts>
            );
          })}
        </ProductsWrap>
        <Button onClick={handleMore}>
          Load More <BsFillArrowRightCircleFill size={19} />
        </Button>
      </HomeCategoriesContainer>
      <Testimonial />
      <Eco />
    </div>
  );
};

export default HomePage;
