"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";
import { getProductDetails } from "@/lib/actions/actions";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <>
      <div className="w-[50%] flex flex-col gap-4 max-[554px]:w-[80%]">
        <div className="flex justify-between items-center">
          <p className="text-heading3-bold leading-[1.5] text-[20px]">
            {productInfo.title}
          </p>
          <HeartFavorite product={productInfo} />
        </div>

        <div className="flex gap-2">
          <p className="text-base-medium text-grey-2">Danh mục:</p>
          <p className="text-base-bold">{productInfo.category}</p>
        </div>

        <div className="flex ">
          <p className=" line-through mr-[10px] italic">
            {productInfo.expense.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p className="text-heading3-bold text-orange-500">
            {productInfo.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>

        {productInfo.colors.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base-medium text-grey-2">Màu sắc:</p>
            <div className="flex gap-2">
              {productInfo.colors.map((color, index) => (
                <p
                  key={index}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedColor === color && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedColor(color)}>
                  {color}
                </p>
              ))}
            </div>
          </div>
        )}

        {productInfo.sizes.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base-medium text-grey-2">Kích cỡ:</p>
            <div className="flex gap-2">
              {productInfo.sizes.map((size, index) => (
                <p
                  key={index}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedSize === size && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}>
                  {size}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Số lượng:</p>
          <div className="flex gap-4 items-center">
            <MinusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p className="text-body-bold">{quantity}</p>
            <PlusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>
        </div>

        <button
          className="  text-base-bold py-3 rounded-lg bg-orange-500 animation-de hover:bg-black hover:text-white"
          onClick={() => {
            cart.addItem({
              item: productInfo,
              quantity,
              color: selectedColor,
              size: selectedSize,
            });
          }}>
          Thêm Giỏ Hàng
        </button>
        <div className="flex-col gap-2 py-5 px-[1.5rem] hidden max-[1366px]:block">
          <p className="text-base-medium text-neutral-800 text-[18px] font-bold">
            Mô tả sản phẩm :
          </p>
          <p className="text-small-medium leading-[2.5] text-[18px] pl-[10px] text-neutral-600 text-justify">
            {productInfo.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
