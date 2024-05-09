import styled from "styled-components";
import bgEco from "../../assets/img/eco-bg.png";

export const EcoSection = styled.section`
  background-image: url(${bgEco});
  background-color: #f9f8f8;
  background-repeat: no-repeat;
  background-position: left center;
  margin-bottom: 30px;
  height: 933px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 750px;
  }

  @media (max-width: 340px) {
    width: 324px;
    height: 700px;
  }
`;

export const EcoWrap = styled.div`
  padding: 78px 60px;
  background-color: #fff;
  margin-left: 560px;
  border-radius: 30px;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.55);

  @media (max-width: 1380px) {
    padding: 40px 20px;
  }

  @media (max-width: 1250px) {
    margin-left: 400px;
  }

  @media (max-width: 1090px) {
    margin-left: 260px;
  }
  @media (max-width: 950px) {
    margin-left: 0;
    padding: 10px 10px;
    background-color: rgb(255, 255, 255, 0.8);
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;

    @media (max-width: 950px) {
      font-size: 28px;
      font-weight: 400;
      line-height: 40px;
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 35px;

    @media (max-width: 950px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 40px;
      margin-bottom: 30px;
    }
    @media (max-width: 480px) {
      font-size: 28px;
      line-height: 30px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 35px;

    padding-inline-start: 0;
  }

  li {
  }

  h4 {
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 7px;

    @media (max-width: 950px) {
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    max-width: 630px;

    @media (max-width: 950px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      max-width: 400px;
    }

    @media (max-width: 480px) {
      line-height: 22px;
      width: 280px;
    }
  }
`;
