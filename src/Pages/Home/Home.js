import React from "react";
import Contact from "../Shared/Contact";
import brand from "../../asserts/images/brands_icons.png";

import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Products from "./Products";
import ProductsReviews from "./ProductsReviews";
import Sliders from "./Sliders";
import JoinWithUs from "./JoinWithUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />

      <Sliders />
      <BusinessSummary />
      <JoinWithUs/>
      <ProductsReviews />
      <Contact />
    </div>
  );
};

export default Home;
