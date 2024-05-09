import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import HomePage from "../src/pages/HomePage/HomePage";
import About from "../src/pages/about/About";
import Shop from "../src/pages/shopPage/Shop";
import SingleShop from "../src/pages/singleShop/SingleShop";
import OurTeam from "../src/pages/ourTeam/OurTeam";
import ConfirmOrder from "../src/pages/confirmOrder/ConfirmOrder";
import BuyPage from "../src/pages/buyPage/BuyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleShop />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/confirm" element={<ConfirmOrder />} />
          <Route path="/buy" element={<BuyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;