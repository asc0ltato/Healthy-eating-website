import styled from "styled-components";
import { Link } from "react-router-dom";
import heroWrap from "../../assets/img/hero.jpg";

export const HeroSection = styled.section`
  background-image: url(${heroWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 639px;
  margin-bottom: 130px;

  @media (max-width: 1100px) {
    height: 499px;
    margin-bottom: 95px;
  }

  @media (max-width: 900px) {
    height: 640px;
    margin-bottom: 95px;
  }

  @media (max-width: 570px) {
    height: 440px;
    margin-bottom: 65px;
  }

  @media (max-width: 440px) {
    margin-bottom: 45px;
    height: 498px;
  }
`;

export const HeroContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const HeroPreTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #68a47f;
  margin-bottom: 10px;
  padding-top: 110px;

  @media (max-width: 1100px) {
    padding-top: 50px;
  }
  @media (max-width: 900px) {
    padding-top: 120px;
    font-size: 30px;
    font-weight: 400;
    line-height: 42px;
  }

  @media (max-width: 570px) {
    padding-top: 80px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
  }

  @media (max-width: 440px) {
    padding-top: 100px;
    font-size: 20px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  width: 530px;
  font-size: 70px;
  font-weight: 800;
  line-height: 82px;
  color: #274c5b;
  margin-bottom: 23px;

  @media (max-width: 900px) {
    width: 400px;
    font-size: 50px;
    font-weight: 800;
    line-height: 64px;
  }

  @media (max-width: 440px) {
    width: 270px;
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
  }
`;

export const HeroLink = styled(Link)`
  display: inline-block;
  background-color: #efd372;
  padding: 28px 39px;
  color: #274c5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;

  @media (max-width: 570px) {
    padding: 20px 28px;
  }

  @media (max-width: 440px) {
    padding: 16px 16px;
  }

  :hover {
    background-color: #fad240;
  }
`;

export const HeroSpan = styled.span`
  display: flex;
  gap: 10px;
`;
