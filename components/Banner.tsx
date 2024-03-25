import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="/banners.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <div className="contentes text-banner uppercase  absolute top-[35%] right-[20%] gap-14 max-[1024px]:hidden min-[1024px]:right-[10%]">
        <div className=" text-[45px] flex flex-col justify-center items-center text-[#434343]">
          <div>
            Chào Hè <span className="text-orange-600">2024</span>
          </div>
          <div className=" py-[8px] text-[#434343]">
            Cùng <span className="text-orange-600">Detta Store</span>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[5px]">
          <button className="btn-banner">
            <Link
              className="uppercase text-[#434343] p-[10px] hover:text-white"
              href="/products"
              target="_blank">
              Khám Phá Ngay
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
