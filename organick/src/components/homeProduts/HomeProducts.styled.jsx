import styled from "styled-components";

export const ProductWrap = styled.li`
  width: 335px;
  padding: 25px 25px 17px 25px;
  background-color: #f9f8f8;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  transition: 0.7s all ease;
  cursor: pointer;
  :hover {
    background-color: #d4d2d2;
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.45);
  }
  @media (max-width: 1080px) {
    width: 260px;
  }
  @media (max-width: 860px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    width: 240px;
  }

  @media (max-width: 530px) {
    width: 280px;
  }
`;

export const ProductImg = styled.img`
  background-color: #fff;
  width: 335px;
  height: 300px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    width: 230px;
    height: 230px;
  }
  @media (max-width: 860px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 650px) {
    width: 210px;
    height: 210px;
  }
  @media (max-width: 530px) {
    width: 280px;
    height: 270px;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const KindProduct = styled.p`
  color: #ffffff;
  padding: 5px 12px;
  background-color: #274c5b;
  width: 110px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  text-align: center;
  margin-bottom: 5px;
`;

export const OldPrice = styled.p`
  color: #858383;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  text-decoration: line-through;
`;
export const NewPrice = styled.p`
  color: #274c5b;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
`;