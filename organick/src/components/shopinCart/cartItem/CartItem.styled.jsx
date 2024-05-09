import styled from "styled-components";

export const CartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: 20px;
    @media (max-width: 410px) {
      margin-left: 10px;
    }
  }
  
  svg {
    color: #274c5b;
    background-color: #fff;
  }
`;

export const ProductCartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 150px;
  align-items: center;
  padding-bottom: 5px;

  @media (max-width: 1410px) {
    gap: 100px;
  }

  @media (max-width: 990px) {
    gap: 50px;
  }

  @media (max-width: 490px) {
    gap: 20px;
  }
  @media (max-width: 410px) {
    gap: 10px;
    justify-content: center;
  }

  img {
    width: 80px;
    @media (max-width: 490px) {
      width: 60px;
    }
    @media (max-width: 410px) {
      width: 50px;
    }
  }
  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    color: #274c5b;
    width: 160px;

    @media (max-width: 600px) {
      width: 100px;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
    }

    @media (max-width: 410px) {
      width: 80px;
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
    }
  }
  p {
    width: 50px;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    color: #274c5b;

    @media (max-width: 410px) {
      width: 40px;
    }
  }
`;