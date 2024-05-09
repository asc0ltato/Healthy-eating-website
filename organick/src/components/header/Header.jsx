import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, Logo, LogoImg, Navigate, Cart, NavigateList, NavItem, CartBtn, CartSpan, NavLinkTwo, BurgerMenu, CartItemsCount } from "./Header.styled";
import logo from "../../assets/img/Logo.svg";
import { BsCart3 } from "react-icons/bs";
import ShoppingCart from "../shopinCart/ShoppingCart";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartVisibilty, setCartVisibilty] = useState(false);

  const items = useSelector((state) => state.cart.itemsInCart);
  const calcTotalPrice = items.reduce(
    (acc, product) => (acc += product.newPrice),
    0
  );

  const onClose = () => {
    setCartVisibilty(false);
  };

  return (
    <HeaderContainer>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenu>
      <Logo>
        <NavLink to="/">
          <LogoImg src={logo} alt="Logo" height={54} width={36} /> Organick
        </NavLink>
      </Logo>
      <Navigate>
        <NavigateList open={open}>
          <NavLinkTwo to="/">
            <LogoImg src={logo} alt="Logo" height={54} width={36} /> Organick
          </NavLinkTwo>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="shop">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="team">Our Team</NavLink>
          </NavItem>
        </NavigateList>
      </Navigate>
      <Cart>
        {items.length > 0 ? (
          <CartItemsCount>{items.length} </CartItemsCount>
        ) : null}
        <CartBtn onClick={() => setCartVisibilty(true)}>
          <BsCart3 color="white" size={26} />
        </CartBtn>
        <CartSpan>{calcTotalPrice} $</CartSpan>
      </Cart>
      <ShoppingCart
        items={items}
        visibilty={cartVisibilty}
        onClose={onClose}
        calcTotalPrice={calcTotalPrice}
      />
    </HeaderContainer>
  );
};

export default Header;
