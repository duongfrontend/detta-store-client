import useCart from "@/lib/hooks/useCart";
import React, { useState } from "react";

const AddToCart = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div>
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
    </div>
  );
};

export default AddToCart;
