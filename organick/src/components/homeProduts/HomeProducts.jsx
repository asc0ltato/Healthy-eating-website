import React from "react";
import { ProductWrap, ProductImg, PriceWrap, PriceContainer, OldPrice, NewPrice, KindProduct } from "./HomeProducts.styled";
import { NavLink } from "react-router-dom";

const HomeProducts = ({ id, kind, title, oldPrice, newPrice, quality, img }) => {
  return (
    <div>
      <NavLink to={`/shop/${id}`}>
        <ProductWrap>
          <KindProduct>{kind}</KindProduct>
          <ProductImg src={img} alt={title} />
          <h4>{title}</h4>
          <PriceWrap>
            <PriceContainer>
              <OldPrice>{oldPrice}$</OldPrice>
              <NewPrice>{newPrice}$</NewPrice>
            </PriceContainer>
            <img src={quality} alt="stars" />
          </PriceWrap>
        </ProductWrap>
      </NavLink>
    </div>
  );
};

export default HomeProducts;
