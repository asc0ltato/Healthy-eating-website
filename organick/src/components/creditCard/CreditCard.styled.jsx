import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  text-align: center;
  margin-top: 40px;
  input {
    width: 460px;
    padding: 10px 20px;
    margin-bottom: 10px;
    border: 1px solid #274c5b;
    color: #283333;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;

    @media (max-width: 480px) {
      width: 290px;
    }
  }
`;

export const ConfirmLink = styled(Link)`
  display: inline-block;
  text-align: center;
  background-color: #274c5b;
  padding: 20px 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  margin-top: 46px;
  border: none;

  @media (max-width: 1150px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    padding: 20px 36px;
  }

  @media (max-width: 710px) {
    margin-top: 20px;
  }

  :hover {
    background-color: #183541;
  }
`;