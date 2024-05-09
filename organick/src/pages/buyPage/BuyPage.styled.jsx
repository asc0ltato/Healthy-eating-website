import styled from "styled-components";

export const BuyPageWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    color: #274c5b;
    font-size: 60px;
    font-weight: 800;
    line-height: 68px;
    margin-bottom: 50px;
    margin-top: 40px;
    text-align: center;

    @media (max-width: 860px) {
      font-size: 50px;
      font-weight: 700;
      line-height: 58px;
    }
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    color: #274c5b;
    font-size: 50px;
    font-weight: 700;
    line-height: 58px;
    margin-bottom: 140px;
    text-align: center;

    @media (max-width: 860px) {
      font-size: 40px;
      line-height: 48px;
    }
  }

  img {
    margin-top: -60px;
    width: 400px;

    @media (max-width: 860px) {
      margin-top: -10px;
      width: 300px;
    }

    @media (max-width: 480px) {
      margin-top: -10px;
      width: 270px;
    }
  }
`;
