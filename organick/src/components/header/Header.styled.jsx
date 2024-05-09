import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 25px 0 25px 0;

  @media (max-width: 1116px) {
    padding: 25px 0 25px 0;
  }

  @media (max-width: 480px) {
    align-items: flex-end;
    padding: 55px 0 56px 0;
  }
`;

export const BurgerMenu = styled.div`
  @media (max-width: 900px) {
    width: 2.8rem;
    height: 2.8rem;
    /* position: fixed; */
    top: 60px;
    left: 18px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    transform-origin: 1px;
    z-index: 22;

    span {
      width: 3rem;
      height: 0.2rem;
      border-radius: 10px;
      background-color: ${({ open }) => (open ? "#fffdfd" : "#274c5b")};
      transition: all 0.3s linear;
      position: ${({ open }) => (open ? "fixed" : "")};

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }

      &:nth-child(3) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(2) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
    }
  }

  @media (max-width: 480px) {
    top: 60px;
    left: 20px;
    padding-top: 10px;
    padding-right: 5px;
  }
`;

export const NavLinkTwo = styled(NavLink)`
  display: none;

  @media (max-width: 900px) {
    display: flex;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 38px;
    font-weight: 700;
    line-height: 44px;

    position: fixed;
    top: 120px;
    left: 160px;
  }

  @media (max-width: 590px) {
    top: 120px;
    left: 90px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    top: 90px;
    left: 90px;
  }

  @media (max-width: 400px) {
    top: 110px;
    left: 50px;
  }
`;

export const LogoImg = styled.img`
  @media (max-width: 480px) {
    width: 26px;
    height: 38px;
  }
`;

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 38px;
  font-weight: 700;
  line-height: 44px;
  color: #274c5b;

  @media (max-width: 1116px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    display: ${({ open }) => (open ? "none" : "flex")};
  }
  @media (max-width: 480px) {
    padding-left: 20px;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
  }
`;

export const Navigate = styled.div``;

export const NavigateList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 1116px) {
    gap: 25px;
  }

  @media (max-width: 900px) {
    display: none;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background-color: #274c5b;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 500px;
    padding-top: 60px;
    color: #fff;
    gap: 50px;
    transition: all 0.8s linear;
  }

  @media (max-width: 590px) {
    width: 370px;
  }

  @media (max-width: 480px) {
    width: 330px;
    gap: 40px;
  }

  @media (max-width: 400px) {
    width: 240px;
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  color: #274c5b;

  @media (max-width: 1116px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  }

  @media (max-width: 900px) {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    line-height: 33.44px;
  }

  @media (max-width: 480px) {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 26.44px;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding-top: 6px;
  }
`;

export const CartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #274c5b;
  border: none;

  @media (max-width: 1116px) {
    width: 52px;
    height: 52px;
  }
`;

export const CartSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #274c5b;
  color: #fff;
  border: none;
  font-size: 14px;
  margin-top: -60px;
  margin-left: -20px;
`;

export const CartItemsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #274c5b;
  color: #fff;
  border: none;
  margin-top: -40px;
  margin-right: -9px;
  font-size: 14px;
`;
