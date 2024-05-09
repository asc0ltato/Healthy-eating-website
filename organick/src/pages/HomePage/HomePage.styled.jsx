import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeCategoriesContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 650px) {
    padding-right: 1px;
    padding-left: 1px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 40px;

    @media (max-width: 650px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 49px;
      margin-bottom: 30px;
    }
  }
`;

export const Categories = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #7eb693;
  margin-bottom: 10px;
`;

export const ProductsWrap = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-items: center;
  column-gap: 20px;
  row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 122px;

  @media (max-width: 1440px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 1070px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 860px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #274c5b;
  padding: 28px 49px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  border: none;

  margin-bottom: 90px;

  :hover {
    background-color: #183541;
  }
`;

export const NewsMoreLink = styled(NavLink)`
  display: inline-block;
  background-color: #fff;
  border: 1px solid #274c5b;
  padding: 28px 44px;
  color: #274c5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  margin-top: 220px;

  @media (max-width: 630px) {
    margin-top: 20px;
  }

  :hover {
    background-color: #b8e5f8;
  }

  span {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 860px) {
    padding: 20px 34px;
  }
`;

export const HomeNewsContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const NewsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

export const NewListWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-items: center;
  column-gap: 20px;
  row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-bottom: 122px;

  @media (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NewPreTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #7eb693;
  margin-bottom: 10px;
  margin-top: 177px;
`;

export const NewsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 50px;
  font-weight: 800;
  line-height: 59px;
  color: #274c5b;
  margin-bottom: 12px;

  @media (max-width: 1090px) {
    font-size: 40px;
    font-weight: 700;
    line-height: 32px;
  }
  @media (max-width: 860px) {
    font-size: 28px;
    line-height: 30px;
  }
`;

// export const MinContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
