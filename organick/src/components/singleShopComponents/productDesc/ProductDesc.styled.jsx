import styled from "styled-components";

export const ProductDescWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 100px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    color: #274c5b;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #525c60;
    text-align: center;
  }
`;