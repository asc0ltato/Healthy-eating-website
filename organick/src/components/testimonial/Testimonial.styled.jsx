import styled from "styled-components";
import testimonWrap from "../../assets/img/Image.png";

export const TestimonialSection = styled.section`
  background-image: url(${testimonWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 1000px;
  margin-bottom: 70px;

  @media (max-width: 1660px) {
    height: 800px;
    margin-bottom: 200px;
  }

  @media (max-width: 1040px) {
    height: 700px;
    margin-bottom: 200px;
  }

  @media (max-width: 870px) {
    height: 600px;
    margin-bottom: 80px;
  }

  @media (max-width: 720px) {
    height: 500px;
    margin-bottom: 180px;
  }

  @media (max-width: 620px) {
    height: 500px;
    margin-bottom: 280px;
  }

  @media (max-width: 460px) {
    height: 800px;
    margin-bottom: 40px;
  }
`;

export const HomeCategoriesContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 60px;

    @media (max-width: 1040px) {
      margin-bottom: 20px;
    }

    @media (max-width: 870px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 40px;
    }

    @media (max-width: 720px) {
      font-size: 30px;
      font-weight: 600;
      line-height: 30px;
    }

    @media (max-width: 460px) {
      font-size: 20px;
      font-weight: 600;
      line-height: 22px;
    }
  }
`;

export const Face = styled.img`
  width: 120px;
  margin-bottom: 10px;

  @media (max-width: 1040px) {
    width: 90px;
  }
`;

export const PreTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #7eb693;
  margin-bottom: 10px;

  margin-top: 80px;

  @media (max-width: 1660px) {
    margin-top: 80px;
  }

  @media (max-width: 1040px) {
    margin-top: 20px;
  }

  @media (max-width: 870px) {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
  }

  @media (max-width: 460px) {
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #525c60;
  margin-bottom: 10px;
  margin-top: 25px;
  max-width: 780px;
  text-align: center;

  @media (max-width: 1040px) {
    max-width: 600px;
  }

  @media (max-width: 870px) {
    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
    max-width: 500px;
  }
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 25px;
  font-weight: 600;
  line-height: 29px;
  color: #525c60;
  margin-bottom: 5px;
  text-align: center;
`;

export const Client = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #525c60;
  margin-bottom: 205px;
  text-align: center;

  @media (max-width: 1660px) {
    margin-bottom: 100px;
  }

  @media (max-width: 870px) {
    margin-bottom: 40px;
  }
`;

export const Star = styled.img`
  width: 100px;
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AdvantagesList = styled.ul`
  display: flex;
  gap: 62px;
  /* margin-bottom: 80px; */

  @media (max-width: 1100px) {
    gap: 32px;
    /* margin-bottom: 24px; */
  }

  @media (max-width: 870px) {
    gap: 20px;
    /* margin-bottom: 24px; */
  }
  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 460px) {
    gap: 10px;
  }

  li {
    width: 211px;
    height: 211px;
    border: 4px solid #7eb693;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1100px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 870px) {
      width: 125px;
      height: 125px;
    }

    @media (max-width: 460px) {
      width: 120px;
      height: 120px;
    }
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;

    @media (max-width: 1100px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 49px;
    }
    @media (max-width: 870px) {
      font-size: 24px;
      font-weight: 600;
      line-height: 26px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    color: #274c5b;

    @media (max-width: 1100px) {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
    @media (max-width: 870px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
    }
    @media (max-width: 460px) {
      font-size: 13px;
      font-weight: 400;
      line-height: 14px;
    }
  }
`;
