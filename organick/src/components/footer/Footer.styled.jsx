import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
  padding-right: 30px;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 1120px) {
    margin-bottom: 2px;
  }

  @media (max-width: 660px) {
    justify-content: center;
    align-items: center;
    padding-right: 150px;
    margin-bottom: 20px;
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-left: 40px;
  border-left: 1px solid #d4d4d4;

  @media (max-width: 1120px) {
    align-items: center;
    padding-left: 70px;
    margin-bottom: 20px;
  }

  @media (max-width: 660px) {
    display: none;
  }

  h3 {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    color: #274c5b;

    @media (max-width: 1120px) {
      margin-bottom: 28px;
      font-size: 24px;
      line-height: 30px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;

    @media (max-width: 1120px) {
      align-items: flex-start;
      gap: 20px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 1120px) {
      align-items: flex-start;
      gap: 20px;
    }
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    color: #525c60;

    @media (max-width: 1120px) {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;

    @media (max-width: 1120px) {
      width: 180px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

export const LogoWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 250px;

  p {
    max-width: 480px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #525c60;
    margin-bottom: 50px;

    @media (max-width: 1120px) {
      max-width: 300px;
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      margin-bottom: 40px;
      margin-left: -100px;
    }

    @media (max-width: 660px) {
      max-width: 600px;
      font-size: 18px;
      font-weight: 400;
      line-height: 17px;
      margin-bottom: 50px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;

    @media (max-width: 1120px) {
      gap: 8px;
      margin-left: -100px;
    }

    @media (max-width: 660px) {
      gap: 10px;
    }
  }

  li {
    padding: 20px;
    border-radius: 50%;
    background-color: #eff6f1;

    @media (max-width: 1120px) {
      padding: 15px;
    }

    @media (max-width: 660px) {
      padding: 6px;
    }
  }
`;

export const FooterLogoImg = styled.img`
  margin-right: 8px;
`;

export const FooterLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 38px;
  font-weight: 700;
  line-height: 44px;
  color: #274c5b;
  margin-bottom: 23px;
  @media (max-width: 1120px) {
    margin-left: -100px;
  }
  @media (max-width: 660px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-left: -100px;
  }
`;