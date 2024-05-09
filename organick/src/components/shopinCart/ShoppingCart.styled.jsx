import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopCartModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #00000055;
  z-index: 223;
`;

export const ShopCart = styled.div`
  width: 70%;
  height: 80%;
  margin: 30px auto;
  background-color: #eee;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  border-radius: 20px;

  @media (max-width: 1410px) {
    width: 80%;
  }

  @media (max-width: 990px) {
    padding: 10px;
    width: 90%;
  }
  @media (max-width: 410px) {
    padding: 5px;
    margin: 20px auto;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  background-color: #274c5b;
  padding: 10px 10px;
  justify-content: space-between;
  border-radius: 20px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    color: #ffffff;

    @media (max-width: 480px) {
      font-size: 28px;
      font-weight: 600;
      line-height: 36px;
    }
  }
`;

export const CloseBtn = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #274c5b;
  svg {
    color: #ffffff;
    width: 40px;

    @media (max-width: 480px) {
      width: 30px;
    }
  }
`;

export const EmptySpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 42px;
  font-weight: 800;
  line-height: 90px;
  color: #274c5b;
  display: block;
  padding: 2rem;
  margin: auto;
`;

export const CartInfo = styled.div`
  /* flex-basis: 50%; */

  h4 {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const DeleteBtn = styled.button``;

export const ConfirmBtn = styled(Link)`
  display: inline-block;
  background-color: #274c5b;
  padding: 28px 49px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  margin-top: 46px;
  border: none;

  @media (max-width: 1150px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    padding: 20px 36px;
  }

  @media (max-width: 710px) {
    margin-top: 20px;
  }

  :hover {
    background-color: #183541;
  }
`;

export const TotalPriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media (max-width: 480px) {
    gap: 15px;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 38px;
    font-weight: 700;
    line-height: 44px;
    color: #274c5b;

    @media (max-width: 480px) {
      font-size: 28px;
      font-weight: 600;
      line-height: 36px;
    }
  }
`;