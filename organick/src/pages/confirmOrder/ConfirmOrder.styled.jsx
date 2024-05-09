import styled from "styled-components";
import shop from "../../assets/img/Image.png";

export const ConfirmSection = styled.section`
  background-image: url(${shop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 627px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  @media (max-width: 780px) {
    margin-bottom: 120px;
  }

  @media (max-width: 480px) {
    margin-top: -40px;
    height: 750px;
    text-align: center;
    margin-bottom: 100px;
  }
`;

export const ConfirmOrderWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 90px;
`;
