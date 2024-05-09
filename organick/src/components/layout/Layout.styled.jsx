import styled from "styled-components";

export const Container = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1530px;
  margin: 0 auto;

  @media (max-width: 690px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  @media (max-width: 400px) {
    padding-right: 5px;
    padding-left: 5px;
  }
`;