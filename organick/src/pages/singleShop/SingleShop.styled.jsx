import styled from "styled-components";

export const SingleProductWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 780px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 90px;
`;

export const ProdImgWrap = styled.div`
  width: 600px;
  height: 600px;
  padding: 60px 35px 50px 90px;
  background-color: #f9f8f8;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  transition: 0.7s all ease;
  cursor: pointer;
  :hover {
    background-color: #d4d2d2;
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 1300px) {
    width: 400px;
    height: 500px;
    padding: 40px 25px 40px 25px;
  }

  @media (max-width: 1080px) {
    width: 400px;
  }
  @media (max-width: 860px) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 780px) {
    width: 400px;
    height: 460px;
  }

  @media (max-width: 530px) {
    width: 280px;
    height: 380px;
  }
`;

export const KindProd = styled.p`
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

export const ProdImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1300px) {
    width: 400px;
  }

  @media (max-width: 1080px) {
    width: 400px;
  }
  @media (max-width: 860px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 780px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 530px) {
    width: 280px;
    height: 270px;
  }
`;

export const SingleProductInfoWrap = styled.div`
  max-width: 650px;

  @media (max-width: 1140px) {
    max-width: 400px;
  }

  @media (max-width: 420px) {
    max-width: 300px;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 40px;
    font-weight: 600;
    line-height: 47px;
    color: #274c5b;
    margin-bottom: 8px;
  }
`;

export const SinglePriceWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

export const InfoText = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #525c60;
  margin-top: 30px;
  margin-bottom: 35px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #274c5b;

    margin-right: 22px;
  }

  input {
    width: 134px;
    height: 80px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #274c5b;

    text-align: center;
    border-radius: 16px;
    border: 3px solid #274c5b;

    margin-right: 20px;

    @media (max-width: 1140px) {
      width: 100px;
      height: 60px;
    }

    @media (max-width: 420px) {
      width: 60px;
    }
  }

  button {
    width: 213px;
    height: 80px;
    background-color: #274c5b;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
    border-radius: 16px;
    border: none;

    @media (max-width: 1140px) {
      width: 160px;
      height: 60px;
    }
    @media (max-width: 420px) {
      width: 100px;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 420px) {
      font-size: 16px;
    }
  }
`;
