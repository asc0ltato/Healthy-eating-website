import styled from "styled-components";
import shopHero from "../../assets/img/shopHero.png";

export const AboutSection = styled.section`
  background-image: url(${shopHero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    height: 400px;
    margin-bottom: 95px;
    background-position: left 20% center;
    margin-top: -80px;
  }

  @media (max-width: 570px) {
    height: 360px;
    margin-bottom: 65px;
    margin-top: -80px;
  }

  @media (max-width: 480px) {
    margin-top: -40px;
    height: 280px;
    margin-bottom: 45px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 70px;
    font-weight: 800;
    line-height: 82px;
    color: #274c5b;

    @media (max-width: 570px) {
      font-size: 50px;
      font-weight: 800;
      line-height: 64px;
      color: #27363b;
    }
  }
`;

export const ShopCategoriesContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 90px;

  @media (max-width: 530px) {
    padding-right: 10px;
    padding-left: 10px;
  }
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
  margin-bottom: 50px;

  @media (max-width: 1500px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1070px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 860px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;

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

  margin-bottom: 50px;

  :hover {
    background-color: #183541;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 380px;
  padding: 20px;
  text-align: start;
  background-color: #f9f8f8;
  box-shadow: 10px 15px 45px rgba(0, 0, 0, 0.65);
  border-color: #fff;
  border-radius: 20px;

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  color: #274c5b;
  outline: none;

  @media (max-width: 530px) {
    width: 280px;
  }

  ::placeholder {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 24px;
    font-weight: 500;
    line-height: 26px;
    color: #274c5b;
    text-align: center;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 60px;
`;
