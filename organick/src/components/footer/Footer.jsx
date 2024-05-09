import React from "react";
import logo from "../../assets/img/Logo.svg";
import { FooterContainer, ContactWrap, LogoWraper, FooterLink, FooterLogoImg } from "./Footer.styled";
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <section>
      <FooterContainer>
        <LogoWraper>
          <FooterLink to="/">
            <FooterLogoImg src={logo} alt="Logo" height={53} width={36} />
            Organick
          </FooterLink>
          <p>
          Organick stands as a haven for conscientious consumers, offering a 
          curated selection of organic products sourced directly from local 
          farmers and producers, fostering a commitment to health and sustainability.
          </p>
          <ul>
            <li>
              <BsInstagram size={20} color="#274C5B" />
            </li>
            <li>
              <BsFacebook size={20} color="#274C5B" />
            </li>
            <li>
              <BsTwitter size={20} color="#274C5B" />
            </li>
            <li>
              <BsPinterest size={20} color="#274C5B" />
            </li>
          </ul>
        </LogoWraper>
        <ContactWrap>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <h4>Email</h4>
              <p>organia@gmail.com</p>
            </li>
            <li>
              <h4>Phone</h4>
              <p>+375259265072</p>
            </li>
            <li>
              <h4>Address</h4>
              <p>Minsk, Partizanskaya Street, 5</p>
            </li>
          </ul>
        </ContactWrap>
      </FooterContainer>
    </section>
  );
};

export default Footer;