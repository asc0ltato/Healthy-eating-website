import styled from "styled-components";
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";

export const BannerContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;

  @media (max-width: 1100px) {
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 155px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const Banner1 = styled.div`
  background-image: url(${banner1});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  width: 682px;
  height: 367px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 420px;
    height: 300px;
  }

  @media (max-width: 860px) {
    width: 320px;
    height: 240px;
  }

  @media (max-width: 660px) {
    width: 260px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 240px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #ffffff;
    margin-left: 55px;

    @media (max-width: 860px) {
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      margin-left: 25px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 40px;
    font-weight: 800;
    line-height: 47px;
    color: #ffffff;
    margin-left: 55px;

    @media (max-width: 860px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 38px;
      margin-left: 25px;
    }
  }
`;

export const Banner2 = styled.div`
  background-image: url(${banner2});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  width: 682px;
  height: 367px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 420px;
    height: 300px;
  }

  @media (max-width: 860px) {
    width: 320px;
    height: 240px;
  }

  @media (max-width: 660px) {
    width: 260px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 240px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-left: 55px;

    @media (max-width: 860px) {
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      margin-left: 25px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 40px;
    font-weight: 800;
    line-height: 47px;
    color: #7eb693;
    margin-left: 55px;

    @media (max-width: 860px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 38px;
      margin-left: 25px;
    }
  }
`;
