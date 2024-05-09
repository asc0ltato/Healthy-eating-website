import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../helpers/products";
import SingleHero from "../../components/singleShopComponents/SingleHero";
import { useDispatch, useSelector} from "react-redux";
import { SingleProductWrap, ProdImgWrap, KindProd, ProdImg, SingleProductInfoWrap, SinglePriceWrap, InfoText, InputWrapper } from "./SingleShop.styled";
import { NewPrice, OldPrice } from "../../components/homeProduts/HomeProducts.styled";
import ProductDesc from "../../components/singleShopComponents/productDesc/ProductDesc";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

const SingleShop = () => {
  const { id } = useParams();
  const product = products[id];
  const items = useSelector((state) => state.cart.itemsInCart);

  const isItemsInCart = items.some((item) => item.id === product.id);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (isItemsInCart) {
      dispatch(deleteItemFromCart(product.id));
    } else {
      dispatch(setItemInCart(product));
    }
  };

  return (
    <div>
      <SingleHero />
      <SingleProductWrap>
        <ProdImgWrap>
          <KindProd>{product.kind}</KindProd>
          <ProdImg src={product.img} alt={product.title} />
        </ProdImgWrap>
        <SingleProductInfoWrap>
          <h4>{product.title}</h4>
          <img src={product.quality} alt="stars" />
          <SinglePriceWrap>
            <OldPrice>{product.oldPrice}$</OldPrice>
            <NewPrice>{product.newPrice}$</NewPrice>
          </SinglePriceWrap>
          <InfoText>
          At our organic store, we take pride in offering a diverse range of high-quality organic products. 
          From fresh, locally sourced fruits and vegetables to a wide selection of whole grains, nuts, and seeds, 
          we prioritize providing wholesome and natural options for our customers. 
          </InfoText>
          <InputWrapper>
            <button onClick={handleClick}>
              {isItemsInCart ? (
                <span>Delete From Cart</span>
              ) : (
                <span>Add To Cart</span>
              )}
            </button>
          </InputWrapper>
        </SingleProductInfoWrap>
      </SingleProductWrap>
      <ProductDesc />
    </div>
  );
};

export default SingleShop;
