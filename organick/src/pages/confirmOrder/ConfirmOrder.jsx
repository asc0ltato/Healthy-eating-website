import React from "react";
import CreditCardUi from "../../components/creditCard/CreditCartd";
import { ConfirmOrderWrap, ConfirmSection } from "./ConfirmOrder.styled";

const ConfirmOrder = () => {
  return (
    <>
      <ConfirmSection>
        <ConfirmOrderWrap>
          <CreditCardUi />
        </ConfirmOrderWrap>
      </ConfirmSection>
    </>
  );
};

export default ConfirmOrder;
