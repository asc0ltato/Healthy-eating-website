import React from "react";
import { ShopCartModal, ShopCart, CartHeader, CloseBtn, EmptySpan, ConfirmBtn, TotalPriceWrap } from "./ShoppingCart.styled";
import CartItem from "./cartItem/CartItem";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const ShoppingCart = ({ visibilty, onClose, calcTotalPrice }) => {
  const items = useSelector((state) => state.cart.itemsInCart);

  return (
    <ShopCartModal style={{ display: visibilty ? "block" : "none" }}>
      <ShopCart>
        <CartHeader>
          <h2>Shopping Cart</h2>
          <CloseBtn onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </CloseBtn>
        </CartHeader>
        <ShopCart>
          {items?.length > 0 ? (
            items?.map((product) => (
              <CartItem
                product={product}
                key={product.title}
                img={product.img}
                kind={product.kind}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                quality={product.quality}
              ></CartItem>
            ))
          ) : (
            <EmptySpan>Cart is currently empty</EmptySpan>
          )}
        </ShopCart>
        {items?.length > 0 ? (
          <div>
            <TotalPriceWrap calcTotalPrice={calcTotalPrice}>
              <span>Total Price</span>
              <span>{calcTotalPrice} $</span>
            </TotalPriceWrap>
            <ConfirmBtn to="/confirm" onClick={onClose}>
              Confirm Order
            </ConfirmBtn>
          </div>
        ) : null}
      </ShopCart>
    </ShopCartModal>
  );
};

export default ShoppingCart;