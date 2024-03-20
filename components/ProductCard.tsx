"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2 max-[554px]:w-[170px] max-[554px]:h-[] rounded-[10px] "
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "20px 10px",
      }}>
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div className="py-[20px]">
        <p className="text-base-bold in text-cut leading-[2]">
          {product.title}
        </p>
        <p className="text-small-medium text-grey-2 ">{product.category}</p>
      </div>
      <div className="flex justify-between items-center max-[554px]:items-start max-[554px]:flex-col">
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
    </Link>
  );
};

export default ProductCard;
