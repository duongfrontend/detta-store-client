"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="h-[100%] flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-red-1">
        Thanh Toán Đơn Hàng Thành Công
      </p>
      <p>Cảm ơn bạn đã mua hàng tại Detta Store</p>
      <Link
        href="/"
        className="p-4 border text-base-bold bg-orange-500 text-[#333333] rounded-[10px] hover:bg-black hover:text-white">
        Tiếp Tục Mua Sắm
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
