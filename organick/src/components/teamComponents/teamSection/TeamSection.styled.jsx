import styled from "styled-components";

export const TeamContainerWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 100px;
`;

export const PersonInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;

  background-color: #f9f8f8;
  border-radius: 20px;
  padding: 0 28px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.45);

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 10px;
    margin-top: 15px;
    width: 100px;
  }

  ul {
    display: flex;
    gap: 17px;
  }

  li {
    padding-bottom: 14px;
    cursor: pointer;
  }
`;

export const TeamContainerInfo = styled.div`
  text-align: center;

  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 20px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    margin-bottom: 42px;
  }
`;

export const TeamImgWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-items: center;
  column-gap: 20px;
  row-gap: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 600px);

  @media (max-width: 1440px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 1070px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
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

export const PreTitleInfo = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 22px;
  font-weight: 400;
  line-height: 29px;
  color: #7eb693;
  margin-bottom: 10px;
`;
