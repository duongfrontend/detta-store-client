"use client";

import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { Image } from "antd";
import { ShoppingBasket } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import AddToCart from "./AddToCart";
import { useState } from "react";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div
      style={{
        padding: "20px 10px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 3px",
      }}
      className="h-[650px] w-[320px] flex flex-col gap-2 max-[554px]:w-[100%] max-[554px]:h-[max-content] rounded-[10px]">
      <Image
        src={product.media[0]}
        alt="product"
        className="heights animation-img rounded-lg object-cover w-[100%] cursor-pointer"
      />
      <Link href={`/products/${product._id}`}>
        <div className="py-[5px]">
          <p className="text-base-bold in text-cut leading-[2]">
            {product.title}
          </p>
          {/* <p className="text-small-medium text-grey-2 ">{product.category}</p> */}
        </div>
      </Link>
      <div className="flex justify-around items-center pb-3 max-[554px]:items-start max-[554px]:flex-col">
        <p className="text-[13px] line-through">
          {product.expense.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </p>
        <p className="font-bold text-orange-700">
          {product.price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </p>
        {/* <HeartFavorite
          product={product}
          updateSignedInUser={updateSignedInUser}
        /> */}
      </div>

      <Link
        className="btn-banner2 flex justify-center items-center"
        w-full
        href={`/products/${product._id}`}>
        Xem chi tiết
      </Link>

      {/* <AddToCart /> */}
      {/* <button
          className="  text-base-bold py-3 rounded-lg animation-de  hover:text-orange-500"
          onClick={() => {
            cart.addItem({
              item: product,
              quantity,
              color: selectedColor,
              size: selectedSize,
            });
          }}>
          <ShoppingBasket />
        </button> */}
    </div>
  );
};

export default ProductCard;
