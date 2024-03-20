"use client";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/actions/actions";
import React from "react";

const Productss = async () => {
  const products = await getProducts();
  return (
    <div className="flex justify-center items-start">
      <div className="sticky top-0 left-0 flex-1 h-[100vh] box-sha lines">
        <Collections />
        {/* <button
          style={{
            borderBottom: "1px solid #cccccc",
            width: "60%",
            padding: "0 0 10px 30px",
          }}>
          <a
            className="flex  justify-start items-center h-[30px]"
            href="/products">
            Tất cả
          </a>
        </button> */}
      </div>
      <div className="flex-[5]">
        <ProductList />
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default Productss;
