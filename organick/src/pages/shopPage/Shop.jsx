import React, { useState } from "react";
import {} from "../../pages/HomePage/HomePage.styled";
import { products } from "../../helpers/products";
import HomeProducts from "../../components/homeProduts/HomeProducts";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AboutSection, ShopCategoriesContainer, Button, ProductsWrap, ButtonWrap, InputWrap, Input } from "./Shop.styled";

const itemsPerRow = 8;

const Shop = () => {
  const [query, setQuery] = useState("");
  const [next, setNext] = useState(itemsPerRow);

  const handleMore = () => {
    setNext(next + itemsPerRow);
  };

  return (
    <>
      <AboutSection>
        <div>
          <h2>Shop</h2>
        </div>
      </AboutSection>
      <ShopCategoriesContainer>
        <InputWrap>
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputWrap>
        <ProductsWrap>
          {products
            .filter(
              (product) =>
                product.kind.toLowerCase().includes(query) ||
                product.title.toLowerCase().includes(query)
            )
            ?.slice(0, next)
            ?.map((product, id) => {
              return (
                <HomeProducts
                  key={id}
                  img={product.img}
                  kind={product.kind}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  quality={product.quality}
                  id={id}
                ></HomeProducts>
              );
            })}
        </ProductsWrap>
        <ButtonWrap>
          <Button onClick={handleMore}>
            Load More <BsFillArrowRightCircleFill size={19} />
          </Button>
        </ButtonWrap>
      </ShopCategoriesContainer>
    </>
  );
};

export default Shop;
