import React from "react";
import Products from "./Products";
import ProductHeroSection from "../components/product/ProductHeroSection";

const ProductsPage = () => {
  return (
    <div className="pt-[96px] w-full overflow-x-hidden">
      <ProductHeroSection />
      <Products />
    </div>
  );
};

export default ProductsPage;
