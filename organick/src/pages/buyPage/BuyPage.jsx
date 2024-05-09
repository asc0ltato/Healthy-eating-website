import React from "react";
import { BuyPageWrap } from "./BuyPage.styled";
import green from "../../assets/img/green2.png";
import { motion } from "framer-motion";

const BuyPage = () => {
  return (
    <BuyPageWrap
      as={motion.div}
      initial={{ scale: 1.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.6, delay: 1 }}
    >
      <img src={green} alt="buy" />
      <h3>Thank you for your purchase!</h3>
      <h4>Thank you for choosing Us!</h4>
    </BuyPageWrap>
  );
};

export default BuyPage;
