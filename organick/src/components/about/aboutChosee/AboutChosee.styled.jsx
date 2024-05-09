import styled from "styled-components";
import img from "../../../assets/img/about/ля.jpg";

export const ChoseeSection = styled.section`
  background-color: #f9f8f8;
  width: 100%;
  padding: 50px 0;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    padding: 80px 0;
    margin-bottom: 70px;
  }
`;

export const ChoseeContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 51px;

  @media (max-width: 1234px) {
    gap: 10px;
  }

  @media (max-width: 420px) {
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const ChoseeInfoWrap = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 6px;

    @media (max-width: 1234px) {
      font-size: 32px;
      font-weight: 400;
      line-height: 42px;
    }
    @media (max-width: 800px) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 20px;
    width: 530px;

    @media (max-width: 1234px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
      width: 420px;
    }
    @media (max-width: 800px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
      width: 310px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    margin-bottom: 25px;
    max-width: 600px;

    @media (max-width: 1234px) {
      width: 420px;
    }
    @media (max-width: 800px) {
      width: 310px;
    }
    @media (max-width: 420px) {
      width: 300px;
    }
  }

  ul {
  }

  li {
    margin-bottom: 24px;
  }

  img {
    width: 19px;
    margin-right: 8px;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: #274c5b;

    @media (max-width: 800px) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  div {
    display: flex;
    align-items: center;
    padding: 20px 50px 20px 20px;
    width: 330px;
    background: #ececec;
    border-radius: 49px;
    margin-bottom: 19px;

    @media (max-width: 420px) {
      width: 260px;
    }
  }
`;

export const ChoseeText = styled.p`
  margin-left: 60px;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: #525c60;
  width: 440px;

  @media (max-width: 1234px) {
    width: 320px;
    margin-left: 40px;
  }

  @media (max-width: 420px) {
    width: 260px;
    margin-left: 10px;
  }
`;

export const ChoseeImgWrap = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  width: 678px;
  height: 600px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ChoseeImgContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  margin-top: 91px;

  @media (max-width: 1234px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    @media (max-width: 1234px) {
      gap: 20px;
    }

    @media (max-width: 800px) {
      column-gap: 20px;
      row-gap: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 420px) {
      column-gap: 10px;
      row-gap: 20px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 50px 36px 19px 36px;
    background-color: #fff;
    border-radius: 18px;

    @media (max-width: 1234px) {
      padding: 20px 16px 15px 16px;
    }

    @media (max-width: 420px) {
      padding: 5px 1px;
    }
  }

  span {
    padding: 18px 25px;
    background-color: #f9f8f8;
    border-radius: 40%;
    margin-bottom: 10px;

    @media (max-width: 1234px) {
      padding: 5px 5px;
    }
  }
  img {
    /* width: 46px;
    margin-bottom: 15px; */
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 14px;

    @media (max-width: 1234px) {
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    margin-bottom: 46px;

    @media (max-width: 1234px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
