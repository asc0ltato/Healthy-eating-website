import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../../redux/cart/reducer";
import { CartWrap, ProductCartWrap } from "./CartItem.styled";

const CartItem = ({ img, title, newPrice, product }) => {

  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteItemFromCart(product.id));
  };

  return (
    <>
      <CartWrap>
        <ProductCartWrap>
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p>{newPrice} $</p>
        </ProductCartWrap>
        <div>
          <button onClick={deleteItem}>
            <AiFillDelete size={25} />
          </button>
        </div>
      </CartWrap>
    </>
  );
};

export default CartItem;
