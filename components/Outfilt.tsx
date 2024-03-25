import Image from "next/image";
import Link from "next/link";
import React from "react";

const Outfilt = () => {
  return (
    <div className="w-full max-[664px]:gap-10 max-[664px]:flex-col max-[664px]:flex">
      <div className="flex justify-center items-center bg-[#eae9e7] max-[664px]:flex-col max-[664px]:gap-10 max-[664px]:p-[10px]">
        <div className="flex-1">
          <img className="w-full" src="/6.webp" alt="áo" />
        </div>
        <div className="h-full flex-1 max-[664px]:w-full">
          <div className="ml-[8%] max-[664px]:ml-0">
            <h1 className="uppercase text-heading1-bold max-[1023px]:text-[25px] max-[664px]:text-[18px]">
              Áo PoLo
            </h1>
            <p className="my-[20px] opacity-85 tracking-[1.5px] max-[1023px]:text-[12px] max-[664px]:text-[10px]">
              Đa dụng và thời thượng
            </p>
            <button className="btn-banner">
              <Link
                className="uppercase text-[#434343] p-[10px] hover:text-white"
                href="/products"
                target="_blank">
                Xem Ngay
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#eae9e7] max-[664px]:flex-col-reverse max-[664px]:gap-10 max-[664px]:p-[10px]">
        <div className="h-full flex-1 max-[664px]:w-full">
          <div className="ml-[8%] max-[1023px]:mr-[8%] max-[1023px]:ml-[0]">
            <h1 className="uppercase text-heading1-bold max-[1023px]:text-[25px] max-[664px]:text-[18px]">
              TRANG PHỤC PHÙ HỢP
            </h1>
            <p className="my-[20px] opacity-85 tracking-[1.5px] max-[1023px]:text-[12px] max-[664px]:text-[10px]">
              Mang đến sự kết hợp tuyệt vời và đồng điệu.
            </p>
            <button className="btn-banner">
              <Link
                className="uppercase text-[#434343] p-[10px] hover:text-white"
                href="/products"
                target="_blank">
                Xem Ngay
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-full" src="/7.webp" alt="áo" />
        </div>
      </div>
    </div>
  );
};

export default Outfilt;
